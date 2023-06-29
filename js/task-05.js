const mainInput = document.getElementById('name-input');
const mainOutput = document.getElementById('name-output');

mainInput.addEventListener("input", handlerQuery)

function handlerQuery(event) {
    
    if (event.currentTarget.value === "" ) {
        mainOutput.textContent = 'Anonymous';
} else{

mainOutput.textContent = event.currentTarget.value;
    
  
}
}
// console.log(event.currentTarget.value);
