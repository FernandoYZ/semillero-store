@extends('layouts.app')

@section('content')
<div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Productos</h1>
    <div class="bg-white py-6 shadow-md rounded-lg overflow-hidden">
        <table id="productTable" class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
                <tr>
                    <th class="w-1/10 py-3 px-4 text-left text-sm font-semibold uppercase">ID</th>
                    <th class="w-1/3 py-3 px-4 text-left text-sm font-semibold uppercase">Nombre</th>
                    <th class="w-1/5 py-3 px-4 text-left text-sm font-semibold uppercase">Precio</th>
                    <th class="w-1/5 py-3 px-4 text-left text-sm font-semibold uppercase">Categoría</th>
                    <th class="w-1/5 py-3 px-4 text-left text-sm font-semibold uppercase"></th>
                    <th class="w-1/4 py-3 px-4 text-left text-sm font-semibold uppercase">Acciones</th>
                </tr>
            </thead>
            <tbody class="text-gray-700 text-sm"></tbody>
        </table>
    </div>

    @include('partials.modals.add_edit_product')
</div>
@endsection
