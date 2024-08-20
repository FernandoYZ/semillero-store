import $ from 'jquery';
import { getAllProducts } from '../../../Core/Services/productService';
import { initializeAddEditModal } from '../Modals/addEditModal';
import 'datatables.net';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'jszip';
import 'pdfmake/build/pdfmake';
import 'pdfmake/build/vfs_fonts';
import language from '../../../Core/Plugins/Spanish.json';

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
                    { data: 'category.name' },
                    {
                        data: null,
                        render: function (data) {
                            return `
                                <div class="flex space-x-2">
                                    <button class="editProduct btn btn-primary text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-sm font-semibold" data-id="${data.id}">
                                        Editar
                                    </button>
                                    <button class="deleteProduct btn btn-danger text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm font-semibold" data-id="${data.id}">
                                        Eliminar
                                    </button>
                                </div>
                            `;
                        }
                    }
                ],
                language: language,
                dom: '<"flex items-center justify-between mb-4"<"flex items-center"l><"flex items-center space-x-2"Bf>>t<"flex items-center justify-between mt-4"ip>', // Diseño personalizado
                buttons: [
                    {
                        extend: 'copyHtml5',
                        text: "<i class='far fa-copy'></i> Copiar",
                        titleAttr: "Copiar",
                        className: "bg-gray-500 hover:bg-gray-600 text-white font-semibold py-1 px-3 rounded-md",
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        text: "<i class='fas fa-file-excel'></i> Excel",
                        titleAttr: "Exportar a Excel",
                        className: "bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-md",
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        extend: 'pdfHtml5',
                        text: "<i class='fas fa-file-pdf'></i> PDF",
                        titleAttr: "Exportar a PDF",
                        className: "bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md",
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        extend: 'csvHtml5',
                        text: "<i class='fas fa-file-csv'></i> CSV",
                        titleAttr: "Exportar a CSV",
                        className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md",
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    }
                ],
                lengthMenu: [
                    [10, 25, 50, -1],
                    ['10', '25', '50', 'Todos']
                ],
                pageLength: 10,
                pagingType: 'simple_numbers',
                language: {
                    ...language,
                    paginate: {
                        first: '<i class="fas fa-angle-double-left"></i>',
                        last: '<i class="fas fa-angle-double-right"></i>',
                        previous: '<i class="fas fa-angle-left"></i>',
                        next: '<i class="fas fa-angle-right"></i>'
                    },
                    lengthMenu: '_MENU_',
                    search: '_INPUT_',
                    searchPlaceholder: 'Buscar...',
                    className: 'bg-red-500',
                },
                columnDefs: [
                    { className: 'text-left', targets: '_all' },
                    { className: 'font-bold', targets: 0 }
                ]
            });

            initializeAddEditModal();
        } catch (error) {
            console.error('Error al cargar la tabla de productos: ', error);
            alert('Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        }
    });
}
