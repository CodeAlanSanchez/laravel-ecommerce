<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Intervention\Image\Facades\Image;

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
            'image' => ['required'],
            'price' => 'required|numeric',
            'category' => 'required',
            'discount' => 'numeric',
        ]);

        $imagePath = request('image')->store('uploads', 'public');

        $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200);
        $image->save();

        
    }

    public function create()
    {
    }
}
