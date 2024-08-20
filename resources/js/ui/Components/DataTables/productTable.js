import $ from 'jquery';
import { getAllProducts } from '../../../Core/Services/productService';
import { initializeAddEditModal } from '../Modals/addEditModal';
import 'datatables.net';

export async function initializeProductTable() {
    $(document).ready(async function () {
        try {
            const response = await getAllProducts();
            const productData = response.data.data;

            const productTable = $('#productTable').DataTable({
                data: productData,
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'price' },
                    { data: 'category.name' }, // Mostrar el nombre de la categoría
                    {
                        data: null,
                        render: function (data) {
                            return `
                                <button class="editProduct btn btn-primary" data-id="${data.id}">Editar</button>
                                <button class="deleteProduct btn btn-danger" data-id="${data.id}">Eliminar</button>
                            `;
                        }
                    }
                ],
            });

            initializeAddEditModal();
        } catch (error) {
            console.error('Error al cargar la tabla de productos: ', error);
            alert('Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        }
    });
}
