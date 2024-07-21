document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const addInput = document.getElementById('add-input');
    const listContainer = document.getElementById('list');
    const template = document.getElementById('list-item-template').content;

    // Load existing items from localStorage
    loadItems();

    addButton.addEventListener('click', addItem);
    addInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const itemText = addInput.value.trim();
        if (itemText !== '') {
            const newItem = document.importNode(template, true);
            newItem.querySelector('span').textContent = itemText;

            // Add event listener to delete button
            newItem.querySelector('.delete-button').addEventListener('click', (e) => {
                e.target.closest('li').remove();
                saveItems();
            });

            // Add event listener to checkbox
            newItem.querySelector('.checkbox').addEventListener('change', saveItems);

            listContainer.appendChild(newItem);
            addInput.value = '';
            saveItems();
        }
    }

    function saveItems() {
        const items = [];
        listContainer.querySelectorAll('li').forEach(item => {
            items.push({
                text: item.querySelector('span').textContent,
                checked: item.querySelector('.checkbox').checked
            });
        });
        localStorage.setItem('list-items', JSON.stringify(items));
    }

    function loadItems() {
        const items = JSON.parse(localStorage.getItem('list-items')) || [];
        items.forEach(itemData => {
            const newItem = document.importNode(template, true);
            newItem.querySelector('span').textContent = itemData.text;
            newItem.querySelector('.checkbox').checked = itemData.checked;

            // Add event listener to delete button
            newItem.querySelector('.delete-button').addEventListener('click', (e) => {
                e.target.closest('li').remove();
                saveItems();
            });

            // Add event listener to checkbox
            newItem.querySelector('.checkbox').addEventListener('change', saveItems);

            listContainer.appendChild(newItem);
        });
    }
});
