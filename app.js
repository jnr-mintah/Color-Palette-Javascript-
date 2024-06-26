document.addEventListener('DOMContentLoaded', () => {
    const smallBoxes = document.querySelectorAll('.color-box.small');
    const bigBox = document.getElementById('big-box');

    smallBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const color = box.style.backgroundColor;
            bigBox.style.backgroundColor = color;
        });
    });
}) 

array.forEach(element => {
    
});
