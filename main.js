//All variables

const form = document.forms.main;

const inputName = form.input;

const textOfField = [];

const buttonAddElement = document.querySelector('.js-buttonadd');

const list = document.querySelector('.js-ToDoListRow');

const todolistRow = document.querySelector('.js-ToDoListRow');

//All function

function changeTextOfField(value){
    
    textOfField.push(value);
    
}

function clearTextOfField(){
    
    for(let j = 0; j < textOfField.length; j++){
        
        for(let i = 0; i < textOfField.length;){
        
            textOfField.shift(textOfField[j]);
            
        }
        
    }
    
    inputName.value = '';
    
}

function buttonAdd(){
    
    const string = textOfField.pop();
    
    if(!string){
        
        alert('Field is empty');
        
     }else{
         
        const elementOfList = document.createElement("div");
        
        elementOfList.classList.add('element__row');
    
        list.append(elementOfList);
         
        elementOfList.innerHTML = `<div class="element__text"> ${string}</div>`;
         
        const crest = document.createElement("div");
         
        crest.classList.add('crest');
         
        crest.innerHTML = `<img class="img js-elementbutton" src="img/crest.png" alt="">`;
         
        elementOfList.append(crest);
         
        clearTextOfField();
         
    }
    
}

//All events

inputName.addEventListener("input", function(e){
    
   changeTextOfField(inputName.value);
    
});

buttonAddElement.addEventListener('click', function(e){
    
    e.preventDefault();  
    
    buttonAdd();
    
});

todolistRow.addEventListener('click', function(e){
    
    e.stopPropagation();
    
    const target = e.target;
    
    const elementOfList = todolistRow.querySelector('.element__row');
        
        target.classList.toggle('active');

        
});






