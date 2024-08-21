export function ExportButtons(datatable) {
    let showExportDropdown = false;

    const toggleExportDropdown = () => {
        showExportDropdown = !showExportDropdown;
        renderExportDropdown();
    };

    const handleExport = (datatable, type) => {
        showExportDropdown = false;
        renderExportDropdown();

        switch (type) {
            case 'copy':
                datatable.buttons(0).trigger();
                break;
            case 'excel':
                datatable.buttons(1).trigger();
                break;
            case 'pdf':
                datatable.buttons(2).trigger();
                break;
            case 'csv':
                datatable.buttons(3).trigger();
                break;
        }
    };

    const renderExportDropdown = () => {
        const dropdownContainer = document.querySelector("#exportDropdownContainer");

        dropdownContainer.innerHTML = `
            <div class="relative inline-block text-left">
                <button
                    id="exportButton"
                    class="text-sm drop-shadow-lg transition ease-in-out duration-300 hover:-translate-y-0.5 hover:bg-gray-600 hover:text-white bg-gray-200 text-gray-500 font-semibold py-2 px-4 rounded-lg inline-flex items-center"
                >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15.2375V3.21252" stroke="currentColor" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M7.375 10.9941L11.3409 14.96C11.5163 15.1337 11.7532 15.2312 12 15.2312C12.2468 15.2312 12.4837 15.1337 12.6591 14.96L16.625 10.9941" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 13.85V18.475C2.75 19.0883 2.99364 19.6765 3.42732 20.1102C3.86099 20.5438 4.44919 20.7875 5.0625 20.7875H18.9374C19.5508 20.7875 20.139 20.5438 20.5727 20.1102C21.0063 19.6765 21.25 19.0883 21.25 18.475V13.85" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Exportar</span>
                    <svg id="dropdownIcon" class="w-3 h-3 ml-2 transition-transform duration-300 ${showExportDropdown ? 'rotate-180' : 'rotate-0'}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div id="dropdownExport" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden ${showExportDropdown ? 'block' : 'hidden'} z-10">
                    <a href="#" id="copyExport" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                        <i class="far fa-copy mr-2"></i> Copiar
                    </a>
                    <a href="#" id="excelExport" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                        <i class="fas fa-file-excel mr-2"></i> Excel
                    </a>
                    <a href="#" id="pdfExport" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                        <i class="fas fa-file-pdf mr-2"></i> PDF
                    </a>
                    <a href="#" id="csvExport" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                        <i class="fas fa-file-csv mr-2"></i> CSV
                    </a>
                </div>
            </div>
        `;

        document.getElementById("exportButton").addEventListener("click", toggleExportDropdown);
        document.getElementById("copyExport").addEventListener("click", (e) => {
            e.preventDefault();
            handleExport(datatable, 'copy');
        });
        document.getElementById("excelExport").addEventListener("click", (e) => {
            e.preventDefault();
            handleExport(datatable, 'excel');
        });
        document.getElementById("pdfExport").addEventListener("click", (e) => {
            e.preventDefault();
            handleExport(datatable, 'pdf');
        });
        document.getElementById("csvExport").addEventListener("click", (e) => {
            e.preventDefault();
            handleExport(datatable, 'csv');
        });
    };

    document.addEventListener("DOMContentLoaded", renderExportDropdown);

    return {
        renderExportDropdown,
        toggleExportDropdown,
        handleExport
    };
}
