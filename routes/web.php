<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/api/products', [App\Http\Controllers\ProductsController::class, 'store']);
Route::get('/api/products', [App\Http\Controllers\ProductsController::class, 'index']);

Route::fallback(function () {
    return view('home');
});
