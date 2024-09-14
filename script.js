let inventory = ['wood', 'stone', 'iron', 'string', 'feather', 'gold', 'diamond', 'leather', 'flint', 'coal', 'stick', 'clay', 'sand', 'glass', 'paper', 'water', 'fire', 'earth', 'air'];

function displayInventory() {
    const itemsList = document.getElementById('items');
    itemsList.innerHTML = '';
    inventory.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.draggable = true;
        listItem.id = item;
        listItem.className = 'draggable';
        listItem.ondragstart = drag;
        itemsList.appendChild(listItem);
    });
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const item = document.getElementById(data);
    const craftingArea = document.getElementById('crafting-area');
    
    // Ensure the item is placed within the crafting area
    const rect = craftingArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        craftingArea.appendChild(item);
        checkCrafting();
    } else {
        alert('Place the item within the crafting area.');
    }
}

function checkCrafting() {
    const craftingArea = document.getElementById('crafting-area');
    const items = Array.from(craftingArea.children).map(child => child.id);
    if (items.includes('wood') && items.includes('stone')) {
        alert('You crafted an axe!');
        inventory.push('axe');
    } else if (items.includes('wood') && items.includes('iron')) {
        alert('You crafted a sword!');
        inventory.push('sword');
    } else if (items.includes('wood') && items.includes('string')) {
        alert('You crafted a bow!');
        inventory.push('bow');
    } else if (items.includes('wood') && items.includes('feather')) {
        alert('You crafted an arrow!');
        inventory.push('arrow');
    } else if (items.includes('gold') && items.includes('diamond')) {
        alert('You crafted a crown!');
        inventory.push('crown');
    } else if (items.includes('leather') && items.includes('iron')) {
        alert('You crafted a shield!');
        inventory.push('shield');
    } else if (items.includes('flint') && items.includes('iron')) {
        alert('You crafted a fire starter!');
        inventory.push('fire starter');
    } else if (items.includes('coal') && items.includes('stick')) {
        alert('You crafted a torch!');
        inventory.push('torch');
    } else if (items.includes('clay') && items.includes('sand')) {
        alert('You crafted a brick!');
        inventory.push('brick');
    } else if (items.includes('sand') && items.includes('glass')) {
        alert('You crafted a window!');
        inventory.push('window');
    } else if (items.includes('wood') && items.includes('paper')) {
        alert('You crafted a book!');
        inventory.push('book');
    } else if (items.includes('water') && items.includes('earth')) {
        alert('You crafted mud!');
        inventory.push('mud');
    } else if (items.includes('fire') && items.includes('earth')) {
        alert('You crafted lava!');
        inventory.push('lava');
    } else if (items.includes('water') && items.includes('air')) {
        alert('You crafted steam!');
        inventory.push('steam');
    }
    displayInventory();
}

displayInventory();
