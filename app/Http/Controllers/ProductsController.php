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
        return Product::paginate();
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $product->update($request->only('name', 'price', 'discount', 'category'));

        return response($product, 200);
    }

    public function edit(Request $request)
    {
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

        return response($product, 201);
    }

    public function show($id)
    {
        return Product::find($id);
    }

    public function productsByUser(Request $request)
    {
        $id = $request->route('id');

        $products = Product::where('user_id', $id)->get();

        return response($products, 200);
    }
}
