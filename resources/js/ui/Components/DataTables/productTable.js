import { DeleteButton } from '../Buttons/DeleteButton';
import { EditButton } from '../Buttons/EditButton';
import { getAllProducts } from '../../../Core/Services/productService';
import { initializeAddEditModal } from '../Modals/addEditModal';
import { ExportButtons } from '../Buttons/ExportButtons';
import language from '../../../Plugins/Spanish.json';

export async function initializeProductTable() {
    try {
        const response = await getAllProducts();
        const productData = response.data.data;

        // Inicializar los botones de exportación
        const exportButtons = ExportButtons();

        const productTable = $('#productTable').DataTable({
            data: productData,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'price' },
                { data: 'category.name' },
                { data: 'category.id' },
                {
                    data: null,
                    render: (data) => {
                        const editButtonHtml = EditButton(data);
                        const deleteButtonHtml = DeleteButton(data);

                        return `
                            <div class="flex space-x-2">
                                ${editButtonHtml}
                                ${deleteButtonHtml}
                            </div>
                        `;
                    }
                }
            ],
            language: language,
            dom: '<"flex items-center justify-between mb-4"<"flex items-center"l><"flex items-center space-x-2"f>><"mb-4" <"#exportDropdownContainer">>t<"flex items-center justify-between mt-4"ip>',
            buttons: [],
            lengthMenu: [
                [10, 25, 50, -1],
                ['10', '25', '50', 'Todos']
            ],
            pageLength: 10,
            pagingType: 'simple_numbers',
            columnDefs: [
                { className: 'text-left', targets: '_all' },
                { className: 'font-bold', targets: 0 }
            ]
        });

        initializeAddEditModal();

        exportButtons.renderExportDropdown();

        return productTable;
    } catch (error) {
        console.error('Error al cargar la tabla de productos: ', error);
        alert('Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
    }
}
