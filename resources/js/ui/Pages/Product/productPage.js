import $ from 'jquery';
import { initializeProductTable } from '../../Components/DataTables/productTable';
import { initializeAddEditModal } from '../../Components/Modals/addEditModal';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../../../Core/Services/productService';

$(document).ready(function () {
    initializeProductTable();
    initializeAddEditModal();

    // Mostrar el modal para agregar/editar productos
    $('#addEditProductModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget); // Botón que disparó el modal
        const productId = button.data('id'); // Extraer ID del botón si existe

        const modal = $(this);
        if (productId) {
            modal.find('#modalTitle').text('Editar Producto');
            // Aquí puedes cargar los datos del producto para editar
            getProduct(productId).then(product => {
                modal.find('#productName').val(product.name);
                modal.find('#productPrice').val(product.price);
                modal.find('#productCategory').val(product.category);
            });
        } else {
            // Agregar nuevo producto
            modal.find('#modalTitle').text('Agregar Producto');
            modal.find('form')[0].reset();
        }
    });

    // Cerrar el modal
    $('#closeModal').click(function () {
        $('#addEditProductModal').modal('hide');
    });

    // Guardar el producto
    $('#productForm').submit(function (event) {
        event.preventDefault();
        const productData = {
            name: $('#productName').val(),
            price: $('#productPrice').val(),
            category: $('#productCategory').val()
        };

        if ($('#modalTitle').text() === 'Agregar Producto') {
            createProduct(productData).then(() => {
                productTable.ajax.reload();
                $('#addEditProductModal').modal('hide');
            });
        } else {
            const productId = $('#editProduct').data('id');
            updateProduct(productId, productData).then(() => {
                productTable.ajax.reload();
                $('#addEditProductModal').modal('hide');
            });
        }
    });
});






