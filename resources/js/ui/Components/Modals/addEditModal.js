export function initializeAddEditModal() {
    const addEditModal = document.getElementById('addEditModal');
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            addEditModal.classList.add('open');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            addEditModal.classList.remove('open');
        });
    });
}
