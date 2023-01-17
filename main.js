//All variables

const buttonAddElement = document.querySelector('.js-buttonadd');

const list = document.querySelector('.js-ToDoListRow');

const forms = document.querySelector('.form__row')

const form = document.forms.main;

const inputName = form.input;

const textOfField = [];

let i = 0;

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

function resetElements(){
    
    if(i == 0){
        
        const removeAll = document.createElement('div');

        removeAll.innerHTML = `<button class="js-resetButton">Reset All</button>`;
         
        removeAll.classList.add('removeAll');
         
        forms.append(removeAll); 
        
        i++;
        
    }
       
}

function elementAdd(){
    
    const string = textOfField.pop();
    
    if(!string){
        
        alert('Field is empty');
        
     }else{
         
        const elementOfList = document.createElement('div');
         
        elementOfList.classList.add('element__row');
    
        list.append(elementOfList);
         
        elementOfList.innerHTML = `<div class="element__text"> ${string}</div>`;

        const crest = document.createElement("div");
         
        crest.classList.add('crest');
         
        crest.innerHTML = `<img class="img js-elementbutton" src="img/crest.png" alt="">`;
         
        elementOfList.append(crest);
         
        resetElements();
         
        clearTextOfField();
         
    }
    
}

function setStyle(target){
    
    target.classList.toggle('active');
    
}

function remove(target){

    target.remove();
    
}

//All events

inputName.addEventListener("input", function(e){
    
   changeTextOfField(inputName.value);
    
});

buttonAddElement.addEventListener('click', function(e){
    
    e.preventDefault();  
    
    elementAdd();
    
});

list.addEventListener('click', function({target}){
    
    const crest = list.querySelector('.js-elementbutton');

    const element = list.querySelector('.element__row');
    
    if(target.classList.contains('element__row')){
        
        setStyle(target)
        
    }
    
    if(target.classList.contains('js-elementbutton')){
        
        remove(target.closest('.element__row'))
    
    }
    
    
});


