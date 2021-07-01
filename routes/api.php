<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [App\Http\Controllers\UsersController::class, 'register']);
Route::post('login', [App\Http\Controllers\UsersController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', [App\Http\Controllers\UsersController::class, 'getAuthenticatedUser']);
    Route::get('products', [App\Http\Controllers\ProductsController::class, 'productsByUser']);
    Route::post('products', [App\Http\Controllers\ProductsController::class, 'store']);
});
