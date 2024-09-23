<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductoController extends Controller
{
    public function disponibles()
    {
        // Consulta para obtener los productos disponibles
        $productos = DB::table('productos')->where('disponible', 1)->get();

        // Retornar la vista utilizando Inertia y pasar los productos al componente TablaProductos
        return Inertia::render('ProductosDisponibles', [
            'productos' => $productos,
        ]);
    }
}
