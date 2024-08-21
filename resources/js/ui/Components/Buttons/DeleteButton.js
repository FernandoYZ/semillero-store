export const DeleteButton = (data) => {
    return `
        <button class="deleteProduct btn btn-danger text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm font-semibold" data-id="${data.id}">
            Eliminar
        </button>
    `;
};
