

const checkbox = document.getElementById('checkbox');
const textFields = document.querySelectorAll('.textfield');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.content-div');

function handleInput(e) {
    console.log(e);
    if (e.target.name === 'content') {
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



