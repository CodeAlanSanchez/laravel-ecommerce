<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Intervention\Image\Facades\Image;
use PhpParser\Node\Stmt\TryCatch;

use Str;
use Storage;

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

    public function update(Request $request)
    {
        $product = Product::get($request->route('id'));

        $updatedProduct = $product->update(
            $request->all()
        );

        return response()->json(compact('updatedProduct'));
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

        if (preg_match('/^data:image\/(\w+);base64,/', $base64_image = request('image'))) {
            $image = substr($base64_image, strpos($base64_image, ',') + 1);

            $image = base64_decode($image);

            $imageName = Str::random(16);

            Storage::disk('public')->put($imageName . ".png", $image);

            $imagePath = Storage::url($imageName . ".png");
        }

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

    public function show()
    {
        $id = request()->route('id');

        $product = Product::find($id);

        return response()->json(compact('product'));
    }

    public function productsByUser(Request $request)
    {
        $id = $request->route('id');

        $products = Product::where('user_id', $id)->get();

        return response()->json(compact('products'));
    }
}
