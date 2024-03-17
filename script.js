const closeBtn = document.querySelector('svg');
const elementsContainer = document.querySelector('div');
const body = document.querySelector('body');

const resetBtn = document.createElement('button');

closeBtn.addEventListener('click', () => {
    elementsContainer.remove();
    resetBtn.textContent = "Reset";
    body.appendChild(resetBtn);
})

resetBtn.addEventListener('click', () => {
    resetBtn.remove();
    body.appendChild(elementsContainer);
})