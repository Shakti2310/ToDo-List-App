const inputTab = document.querySelector('.row input');
const addButton = document.querySelector('.row button');
const inputValues = [];

addButton.addEventListener('click', () => {
    taskAdder();
    doneButton();
    removeButton();
});

inputTab.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        taskAdder();
        doneButton();
        removeButton();
    }
});

function taskAdder() {
    inputValues.push(inputTab.value);
    inputTab.value = '';

    const taskTab = document.createElement('div');
    taskTab.classList.add('task');

    taskTab.innerHTML = `
        <button id="checkButton" type="button"><img src="./images/unchecked.png" ></button>
        <p>${inputValues[inputValues.length - 1]}</p>
        <button id="cancelButton" type="button">
        <span class="material-symbols-outlined">cancel</span>
        </button>`;

    const container = document.querySelector('.container');
    container.append(taskTab);
}

function doneButton() {
    const checkButtons = document.querySelectorAll('#checkButton');
    for (let checkButton of checkButtons) {
        checkButton.addEventListener('click', () => {
            checkButton.childNodes[0].src = './images/checked.png';
            checkButton.nextElementSibling.style.textDecoration = 'line-through';
        });
    }
}

function removeButton() {
    const cancelButtons = document.querySelectorAll('#cancelButton');
    for (let cancelButton of cancelButtons) {
        cancelButton.addEventListener('click', () => {
            cancelButton.parentElement.remove();
        });
    }
}