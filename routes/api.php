<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\productController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthenticationController::class,'register']);
Route::post('/login',[AuthenticationController::class,'login']);
Route::post('/logout',[AuthenticationController::class,'logout']);
Route::get('/getname', [AuthenticationController::class,'getName'])->middleware('auth:api');
Route::post('/addproduct',[productController::class,'addProduct'])->middleware('auth:api');
Route::get('/showall',[productController::class,'showAll']);
Route::get('/showmyproduct',[productController::class,'showMyProduct'])->middleware('auth:api');
Route::delete('/deleteproduct/{id}',[productController::class,'deleteProduct']);
Route::post('/updateproduct/{id}',[productController::class,'updateProduct'])->middleware('auth:api');
Route::get('/getproduct/{id}',[productController::class,'getProduct']);