<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view('Pages.Category.index', compact('categories'));
    }

    public function create()
    {
        return view('Pages.Category.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'status' => 'boolean',
        ]);

        Category::create($validated);

        return to_route('Pages.Category.index')->with('success', 'Category created successfully.');
    }

    public function edit(Category $category)
    {
        return view('Pages.Category.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'status' => 'boolean',
        ]);

        $category->update($validated);

        return to_route('Pages.Category.index')
        ->with(
            'success',
            'Category updated successfully.'
        );
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return to_route('Pages.Category.index')
        ->with(
            'success',
            'Category deleted successfully.'
        );
    }
}
