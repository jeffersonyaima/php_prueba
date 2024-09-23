# Documentación del Proyecto de Gestión de Productos

Esta documentación detalla los cambios realizados en el proyecto, incluyendo la modificación del logo, la creación del botón para ver productos disponibles, la vista de productos y la conexión a la base de datos.

## video explicativo: https://youtu.be/a7bzC0QwhGM

## importante

### los elementos de la bases de datos fueron cambiados:
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=laravel
- DB_USERNAME=root
- DB_PASSWORD=123

## Cambios Realizados

### 1. Cambio de Logo

- Se reemplazó el logo existente por uno nuevo ubicado en `/public/storage/prueba/logo.png`.
- Se actualizó la referencia al logo en la interfaz para que refleje el cambio.

### 2. Creación del Botón "Ver Productos Disponibles"

- Se diseñó un nuevo botón llamado "Ver Productos Disponibles" que redirige a la vista de productos disponibles.
- El botón utiliza Tailwind CSS para asegurar una estética coherente con el resto de la aplicación.
  
### 3. Creación de la Vista de Productos

- Se creó la vista `ProductosDisponibles` que muestra todos los productos disponibles en una tabla.
- Esta vista utiliza el componente `TablaProductos`, que es responsable de la presentación de los datos.

### 4. Conexión a la Base de Datos

- Se estableció una conexión con la base de datos mediante Laravel.
- Se utilizó el modelo de consulta de Eloquent para obtener los productos disponibles de la tabla `productos`.
- El controlador `ProductoController` implementa el método `disponibles` que recupera los productos y los pasa a la vista correspondiente.

### Estructura del Controlador

El siguiente es un ejemplo del controlador utilizado para obtener los productos disponibles:

```php
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
        return Inertia::render('ui/TablaProductos', [
            'productos' => $productos,
        ]);
    }
}
