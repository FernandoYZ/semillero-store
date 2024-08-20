<div id="addEditProductModal" class="modal hidden fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <h2 id="modalTitle" class="text-xl font-semibold mb-4">Agregar Producto</h2>
        <form id="productForm">
            <div class="mb-4">
                <label for="productName" class="block text-gray-700">Nombre:</label>
                <input type="text" id="productName" name="name" class="w-full p-2 border rounded" required>
            </div>
            <div class="mb-4">
                <label for="productPrice" class="block text-gray-700">Precio:</label>
                <input type="number" id="productPrice" name="price" class="w-full p-2 border rounded" required>
            </div>
            <div class="mb-4">
                <label for="productCategory" class="block text-gray-700">Categoría:</label>
                <input type="text" id="productCategory" name="category" class="w-full p-2 border rounded" required>
            </div>
            <div class="flex justify-end">
                <button type="button" id="closeModal" class="mr-4 bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
                <button type="submit" id="saveProduct" class="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
            </div>
        </form>
    </div>
</div>
