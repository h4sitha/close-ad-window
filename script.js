const closeBtn = document.querySelector('svg');
const elementsContainer = document.querySelector('div');

closeBtn.addEventListener('click', () => {
    elementsContainer.remove();
})