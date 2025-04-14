// Function to change the text content of an element
function changeText(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

// Function to change the CSS style of an element
function changeStyle(elementId, property, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style[property] = value;
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

// Function to add a new element to the DOM
function addElement(containerId, elementType, textContent, className) {
    const container = document.getElementById(containerId);
    if (container) {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        if (className) {
            newElement.classList.add(className);
        }
        container.appendChild(newElement);
    } else {
        console.error(`Container with ID '${containerId}' not found.`);
    }
}

// Function to remove the last added element
function removeLastElement(containerId) {
    const container = document.getElementById(containerId);
    if (container && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    } else if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
    } else {
        console.log("No elements to remove in the container.");
    }
}

// Event listeners to respond to user interactions
document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const addElementBtn = document.getElementById('addElementBtn');
    const elementContainer = document.getElementById('elementContainer');

    if (changeTextBtn) {
        changeTextBtn.addEventListener('click', () => {
            changeText('dynamicText', 'The text has been updated!');
        });
    }

    if (changeStyleBtn) {
        changeStyleBtn.addEventListener('click', () => {
            changeStyle('dynamicText', 'color', 'green');
            changeStyle('dynamicText', 'font-weight', 'bold');
        });
    }

    if (addElementBtn) {
        addElementBtn.addEventListener('click', () => {
            const newElementCount = elementContainer.children.length + 1;
            addElement('elementContainer', 'div', `New Element ${newElementCount}`, 'new-element');
        });

        // Add a button to remove the last element
        const removeElementBtn = document.createElement('button');
        removeElementBtn.textContent = 'Remove Last Element';
        removeElementBtn.addEventListener('click', () => {
            removeLastElement('elementContainer');
        });
        document.querySelector('main').appendChild(removeElementBtn);
    }
});