<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Intervention\Image\Facades\Image;
use PhpParser\Node\Stmt\TryCatch;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return $products;
    }

    public function store()
    {
        $data = request()->validate([
            'name' => 'required',
            'image' => 'required',
            'price' => 'required|numeric',
            'category' => 'required',
            'discount' => 'numeric',
        ]);

        // $imagePath = request('image')->store('uploads', 'public');
        $imagePath = "123";

        // $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200);
        // $image->save();

        $user = JWTAuth::user();

        $product = $user->products()->create([
            'name' => $data['name'],
            'image' => $imagePath,
            'price' => $data['price'],
            'category' => $data['category'],
            'discount' => $data['discount'],
        ]);

        return response()->json(compact('product'));
    }

    public function create()
    {
    }

    public function productsByUser()
    {
        $user = JWTAuth::user();

        $data = Product::where('user_id', $user->id)->get();

        return response()->json(compact('data'));
    }
}
