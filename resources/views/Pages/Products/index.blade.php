@extends('layouts.app')

@section('content')
<div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Productos</h1>
    <table id="productTable" class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
            <tr>
                <th class="w-1/4 py-2">ID</th>
                <th class="w-1/2 py-2">Nombre</th>
                <th class="w-1/4 py-2">Precio</th>
                <th class="w-1/4 py-2">Categoría</th>
                <th class="w-1/4 py-2">Acciones</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    @include('Partials.Modals.add_edit_product')
</div>
@endsection

