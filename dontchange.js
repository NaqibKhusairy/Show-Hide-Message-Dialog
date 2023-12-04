document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('.open-button');
    const dialog = document.querySelector('.dialog');
    const closeButton = document.querySelector('.close-button');
    const madeBy = document.getElementById('madeBy');
    
    openButton.addEventListener('click', function() {
        dialog.showModal();
        madeBy.textContent = 'Made By QIB.Je';
    });

    closeButton.addEventListener('click', function() {
        dialog.close();
        madeBy.textContent = '';
    });
});
