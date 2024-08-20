import $ from 'jquery';
import { API_PRODUCT } from '../../../Core/Services/productService';
import { initializeAddEditModal } from '../Modals/addEditModal';
import 'datatables.net';

console.log(API_PRODUCT);

export function initializeProductTable() {
    $(document).ready(function () {
        const productTable = $('#productTable').DataTable({
            processing: true,
            serverSide: true,
            ajax: {
                // url: getAllProducts().then(response => response.data),
                url: API_PRODUCT,
                type: 'GET',
                dataSrc: 'data',
                error: function(xhr, error, code) {
                    // alert('Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
                    console.log(xhr.responseText);
                }
            },
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'price' },
                { data: 'category_id' },
                {
                    data: null,
                    render: function (data) {
                        return `
                            <button class="editProduct btn btn-primary" data-id="${data.id}">Editar</button>
                            <button class="deleteProduct btn btn-danger" data-id="${data.id}">Eliminar</button>
                        `;
                    }
                }
            ]
        });

        initializeAddEditModal();
    });
}
