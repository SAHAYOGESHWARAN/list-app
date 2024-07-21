document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const addInput = document.getElementById('add-input');
    const listContainer = document.getElementById('list');
    const template = document.getElementById('list-item-template').content;

    addButton.addEventListener('click', () => {
        const itemText = addInput.value.trim();
        if (itemText !== '') {
            const newItem = document.importNode(template, true);
            newItem.querySelector('span').textContent = itemText;
            listContainer.appendChild(newItem);
            addInput.value = '';
        }
    });

    addInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
