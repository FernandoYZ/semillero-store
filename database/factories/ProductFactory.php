<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\Product;
use App\Models\Trademark;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Product::class;

    public function definition(): array
    {
        return [
            'category_id' => $this->getRandomCategoryId(),
            'trademark_id' => $this->getRandomTrademark(),
            'name' =>fake()->word(),
            'description' => fake()->sentence(),
            'price' => fake()->randomFloat(2, 1, 100),
            'amount' => fake()->numberBetween(1, 100),
            'unit_measurement' => fake()->word(),
            'image' => fake()->imageUrl(),
            'ubication' => fake()->word(),
            'status' => fake()->boolean(),
        ];
    }

    private function getRandomCategoryId()
    {
        $maxId = Category::max('id');
        return rand(1, $maxId);
    }

    private function getRandomTrademark() {
        $maxId = Trademark::max('id');
        return rand(1, $maxId);
    }
}
