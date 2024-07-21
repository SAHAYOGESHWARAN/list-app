document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const addInput = document.getElementById('add-input');
    const listContainer = document.getElementById('list');

    addButton.addEventListener('click', () => {
        const itemText = addInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            listContainer.appendChild(listItem);
            addInput.value = '';
        }
    });

    addInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
