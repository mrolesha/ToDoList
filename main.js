//All variables

const buttonAddElement = document.querySelector('.js-buttonadd');

const list = document.querySelector('.js-ToDoListRow');

const forms = document.querySelector('.form__row');

const circle = document.querySelector('.circle');

const arrow = forms.querySelector('.arrow-js');

const switchFooter = document.querySelector('.footer-js');

const footerCount = forms.querySelector('.footer__count');

const reset = forms.querySelector('.js-clear');

const menuLinks = forms.querySelector('.footer__menu');

const all = forms.querySelector('.js-all');

const active = forms.querySelector('.js-active');

const completed = forms.querySelector('.js-completed');

const form = document.forms.main;

const inputName = form.input;

const textOfField = [];

const elements = [];

let i = 0;

let arrowCount = 0;

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

function elementAdd(string){
    
        const elementOfList = document.createElement('div');
         
        elementOfList.classList.add('element__row');
    
        list.append(elementOfList);
    
        const circle = document.createElement('div');
	
		const elementRow = document.createElement('div');
		
		elementRow.classList.add('left__row')
	
		elementOfList.append(elementRow);

        circle.innerHTML = `<img class="circle" src="img/circle.png" alt="">`;
        
        elementRow.innerHTML = `<div class="element__text"> ${string}</div>`;
    
        elementRow.prepend(circle);
	
        const crest = document.createElement("div");
         
        crest.classList.add('crest');
         
        crest.innerHTML = `<img class="img js-elementbutton" src="img/crest.png" alt="">`;
         
        elementOfList.append(crest);
    
        arrow.classList.add('arrow');
    
        checkCount();
        
        switchFooter.classList.add('formon');
    
        elements.push(elementOfList);
	
		all.classList.add('_active');
    
        clearTextOfField();
         
}

function checkCount(){
    
    arrowCount++;
    
    if(arrowCount == 1){
        
        footerCount.innerHTML = `${arrowCount} item left`;
        
    }else{
        
        footerCount.innerHTML = `${arrowCount} items left`;
        
    }
    
}

function setStyle(target){
    
    target.classList.toggle('active');
    
}

function remove(target){

    target.remove();
    
    --arrowCount;
    
    if(arrowCount == 0){
        
        arrow.classList.remove('arrow');
       
        switchFooter.classList.remove('formon');
        
        footerCount.innerHTML = `${arrowCount} item left`;
        
    }else{
        
        footerCount.innerHTML = `${arrowCount} items left`;
        
    }
    
}

function checkString(string){
	
	for(let i = 0; i < string.length; i++){
		
			if(string[i] === ' '){

            	return;

        	}else{
				
				return elementAdd(string);
				
			}
				
	}
	
}

function allList(){
	
	for(let i = 0; i < elements.length; i++){
		
		if(elements[i].classList.contains('element__row')){
			
			list.append(elements[i]);	
			
		}

	}
	
}

function activeList(){
	
	for(let i = 0; i < elements.length; i++){
		
		if(elements[i].classList.contains('active')){
			
			elements[i].remove();
			
		}else{ 
		
			list.append(elements[i]);
			
		}

	}
	
}

function completedList(){
	
	for(let i = 0; i < elements.length; i++){
		
		if(elements[i].classList.contains('active')){
			
			list.append(elements[i]);	
			
		}else{
			
			elements[i].remove();
			
		}

	}
	
}

//All events

inputName.addEventListener('keyup', function(e){

    if(e.code != 'Enter'){

        inputName.addEventListener("input", function(e){

            changeTextOfField(inputName.value);
			
        });

    }else{

        e.preventDefault();  

        const string = textOfField.pop();

		checkString(string);

    }
    
});

list.addEventListener('click', function({target}){
    
    const crest = list.querySelector('.js-elementbutton');

    const element = list.querySelector('.element__row');
    
    if(target.classList.contains('element__row')){
        
		if(target.closest('.element__row')){
				
        	setStyle(target);

		}
		
    }
    
    if(target.classList.contains('js-elementbutton')){
		
        remove(target.closest('.element__row'));
		
		for(let i = 0; i < elements.length; i++){
			
			if(target.closest('.element__row') == elements[i]){
				
				elements.splice(i);
				
			}
			
		}
		
    }
    
});

reset.addEventListener('click', function(e){
    
    e.preventDefault();
    
    list.innerHTML = `` ;
    
    arrow.classList.remove('arrow');
       
    switchFooter.classList.remove('formon');
	
	all.classList.remove('active');

	active.classList.remove('active');

	completed.classList.remove('active');
	
	elements.splice(0, elements.length);
	
    arrowCount = 0 ;
    
    i = 0 ;
    
});

menuLinks.addEventListener('click', function(e){
	
		e.preventDefault();
		
		const target = e.target;
	
		if(target == all){
			
			all.classList.add('_active');
			
			active.classList.remove('_active');
			
			completed.classList.remove('_active');
			
			allList();

		}
	
		if(target == active){
			
			all.classList.remove('_active');
			
			active.classList.add('_active');
			
			completed.classList.remove('_active');
			
			activeList();
			
		}
	
		if(target == completed){
			
			all.classList.remove('_active');
			
			active.classList.remove('_active');
			
			completed.classList.add('_active');
			
			completedList();
			
		}
	
});
