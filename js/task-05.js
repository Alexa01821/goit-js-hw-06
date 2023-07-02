const nameInputRef = document.querySelector('#name-input');
console.log(nameInputRef);
const nameUserRef = document.querySelector('#name-output');
console.log(nameUserRef);

nameInputRef.addEventListener('input', onWriteName)

function onWriteName(){
    if(nameInputRef.value === '' ||nameInputRef.value === ' ' ){
        return nameUserRef.textContent = 'Anonymous'; 
    }
   return nameUserRef.textContent = nameInputRef.value;
}


