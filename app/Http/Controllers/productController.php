<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;

class productController extends Controller
{
    public function addProduct(Request $request)
    {
        $this->validate($request,[
            'title'=>'required',
             'price'=>'required',
             'desc'=>'required',
             'filepath'=>'required|mimes:jpg,png,jpeg|max:5048'
        ]);
        $product=new product;
        $product->title=$request->title;
        $product->price=$request->price;
        $product->desc=$request->desc;

        $imagenewname=uniqid().'-'.$request->title .'.'.$request->filepath->extension();
        $request->filepath->move(public_path('images'),$imagenewname);

       $product->filepath=$imagenewname;
       $product->user_id=auth()->user()->id;

      $product->save();

        return response([
            'message'=>"produt inserted succesfully",
        ],201);



    }

    public function showAll()
    {
        $products=product::all();
        return response()->json($products);


    }
    public function showMyProduct(Request $request)
    {
        $userid=auth()->user()->id;

        $products=product::where('user_id','=',$userid)->get();
        return response()->json($products);


    }

    public function editProduct(Request $request)
    {


    }

    public function deleteProduct($id)
    {
        $product=product::find($id);
        $product->delete();
        return response([
            'message'=>'product deleted succesfully'
        ],201);
    }
    public function updateProduct(Request $request,$id)
    {
        $this->validate($request,[
            'title'=>'required',
             'price'=>'required',
             'desc'=>'required',
             'filepath'=>'required|mimes:jpg,png,jpeg|max:5048'
        ]);
        $product=product::find($id);

        $oldFilePath = $product->filepath;

       
        $product->title=$request->title;
        $product->price=78;
        $product->desc=$request->desc;

        $imagenewname=uniqid().'-'.$request->title .'.'.$request->filepath->extension();
        $request->filepath->move(public_path('images'),$imagenewname);

       $product->filepath=$imagenewname;
       $product->user_id=auth()->user()->id;

       if ($oldFilePath && file_exists(public_path('images/' . $oldFilePath))) {
        unlink(public_path('images/' . $oldFilePath));
    }

        $product->save();

        return response([
            'message'=>"produt updated succesfully",
        ],201);
    }

    public function getProduct($id)
    {
        $product=product::find($id);

        return response([
            'data'=>$product
        ],201);



    }

}
