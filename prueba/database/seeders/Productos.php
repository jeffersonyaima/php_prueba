<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Productos as ProductosDB;

class Productos extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for($i = 0; $i < 100; $i++){
            ProductosDB::create([
                "nombre" => $faker->word,
                "precio" => $faker->randomDigit(),
                "disponible" => $faker->boolean()
            ]);
        }
    }
}
