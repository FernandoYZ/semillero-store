@extends('Layouts.app')

@section('content')
    <button onclick="openProductModal()">Agregar Producto</button>
    <div id="productModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeProductModal()">&times;</span>
            <form id="productForm">
                <input type="text" name="name" placeholder="Nombre del Producto">
                <input type="number" name="price" placeholder="Precio">
                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>
@endsection
