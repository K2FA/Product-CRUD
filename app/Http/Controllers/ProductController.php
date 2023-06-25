<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        $products = Product::query()->get();
        return Inertia::render('Dashboard', compact('products'));
    }

    public function create(){
        $products = Product::query()->get();
        return Inertia::render('Product/Create', compact('products'));
    }

    public function store(Request $request){
        Product::create([
            'nama' => $request['nama'],
            'deskripsi' => $request['deskripsi'],
            'harga' => $request['harga'],
        ]);
        return Redirect::route('dashboard');
    }

    public function edit(Request $request){
        $products = Product::find($request->id);
        return Inertia::render('Product/Edit', compact('products'));
    }

    public function update(Request $request){
        $products = Product::find($request->id);
        $products->update([
            'nama' => !blank($request->nama) ? $request->nama : $products->nama,
            'deskripsi' => !blank($request->deskripsi) ? $request->deskripsi : $products->deskripsi,
            'harga' => !blank($request->harga) ? $request->harga : $products->harga,
        ]);
        return Redirect::route('dashboard');
    }

    public function destroy(Product $product){
        $product->delete();
        return Redirect::route('dashboard');
    }
}
