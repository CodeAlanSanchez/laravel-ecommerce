<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return $products;
    }

    public function store(Request $request)
    {
        $product = $request->body;
    }

    public function create()
    {
    }
}
