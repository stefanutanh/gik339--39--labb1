

const checkbox = document.getElementById('checkBox');
const textFields = document.querySelectorAll('.input-field');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.content-div');

console.log(checkbox);

function handleInput(e) {
    console.log(e);
    if (e.target.name === 'color') {
        contentDiv.innerHTML = e.target.value;
    }
}

checkbox.addEventListener('change', function(){
console.log("checkbox");
for (let textfield of textFields) {
    if (textfield.name === 'color') {
        contentDiv.style.background = textfield.value;
    }
}
});

textFields.forEach((field) => field.addEventListener('input', handleInput));

button.addEventListener('click', function() {
    console.log("Removed element");
    contentDiv.remove();
});



