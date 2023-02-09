//All variables

const buttonAddElement = document.querySelector('.js-buttonadd');

const list = document.querySelector('.js-ToDoListRow');

const forms = document.querySelector('.form__row');

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

const markElements = [];

let arrowCount = 0;

let markedElements = 0;

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
	
		circle.classList.add('mark');
	
		elementOfList.append(elementRow);

        circle.innerHTML = `<img class="circle" src="img/circle.png" alt="">`;
        
        elementRow.innerHTML = `<div class="element__text"> ${string}</div>`;
    
        elementRow.prepend(circle);
	
        const crest = document.createElement("div");
         
        crest.classList.add('crest');
         
        crest.innerHTML = `<img class="img js-elementbutton" src="img/crest.png" alt="">`;
         
        elementOfList.append(crest);
    
        arrow.classList.add('arrow');
	
		checkCount(elements.length + 1 - markedElements);
	
        switchFooter.classList.add('formon');
    
        elements.push(elementOfList);
	
        clearTextOfField();
         
}

function checkCount(arrowCounts){
	
	footerCount.innerHTML = `${arrowCounts} item left`
	
}

function setStyle(target){
	
	const active = target.closest('.element__row');
	
    active.classList.toggle('active')
	
}

function setCircle(target){
	
	if(target.innerHTML == `<img class="circle" src="img/marked.png" alt="">`){
		
		target.innerHTML = `<img class="circle" src="img/circle.png" alt="">`;
		
		markedElements--;
		
	}else{
		
		target.innerHTML = `<img class="circle" src="img/marked.png" alt="">`;
		
		markedElements++;
		
	}

}

function remove(target){
	
	if(target.querySelector('.mark').innerHTML == `<img class="circle" src="img/marked.png" alt="">`){
		
		markedElements--;
		
		target.remove();

	}else{
		
		target.remove();
		
	}
	
    if(elements.length == 1){
		
        arrow.classList.remove('arrow');
       
        switchFooter.classList.remove('formon');
        
	}else{
		
		footerCount.innerHTML = `${elements.length} items left`;	
		
	}
	
}

function checkString(string){
	
	for(let i = 0; i < string.length; i++){
		
		if(string[i] != ' '){

			return elementAdd(string);

		}
		
	}
		
}

function removeSpaceInString(str){
	
	let space = '';
	
	for(let i = 0; i < str.length; i++){
		
			if(str[i] == ' ' && str[i+1] == ' '){
		
				delete str[i];

        	}else{
				
				space += str[i]
				
			}
		
	}
	
	checkString(str);
	
}

function changeTextString(){
	
	const letas = [];
	
	const changeText = list.querySelector('.element__text');
	
	for(let i = 0; i < elements.length; i++){
			
		letas.push(elements[i].querySelector('.element__text'));
		
	}
		
	list.addEventListener('dblclick', function({target}){
		
		for(let i = 0; i < letas.length; i++){
			
			if(target == letas[i]){
				
				letas[i].innerHTML= `<input class="texttt" name="input" type="text"> `;
				
			}
			
		}
		
	});
	
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

function cleanElementsArray(){
	
	for(let i = 0; i < elements.length; i++){
			
		if(elements[i].classList.contains('active')){

			elements.splice(i, i+1);
			
		}
			
	}
	
	for(let i = 0; i < elements.length; i++){
			
		if(elements[i].classList.contains('active')){

			elements.splice(i, i+1);
			
		}
			
	}
	
	if(elements.length == 0){
		
        arrow.classList.remove('arrow');
       
        switchFooter.classList.remove('formon');
        
        footerCount.innerHTML = `${arrowCount} item left`;
        
	}else{
		
		footerCount.innerHTML = `${arrowCount} items left`;	
		
	}
	
	checkCount(elements.length);
	
}

//All events

inputName.addEventListener('keyup', function(e){

    if(e.code != 'Enter'){

        inputName.addEventListener("input", function(e){

            changeTextOfField(inputName.value);
			
        });

    }else{

        e.preventDefault();  

        const str = textOfField.pop();

		removeSpaceInString(str);
		
    }
    
});

list.addEventListener('click', function({target}){
    
    const button = list.querySelector('.js-elementbutton');

    const element = list.querySelector('.element__row');

    if(target.classList.contains('circle')){
		
		setStyle(target.closest('.left__row'));
		
		setCircle(target.closest('.mark'));
		
		markElements.push(target);
		
		checkCount(elements.length-markedElements);
		
    }
    
    if(target.classList.contains('js-elementbutton')){
		
        remove(target.closest('.element__row'));
		
		for(let i = 0; i < elements.length; i++){
			
			if(target.closest('.element__row') == elements[i]){
				
				elements.splice(i, i+1);
				
			}
			
		}
		
		checkCount(elements.length-markedElements);
		
    }
		
		changeTextString();
	
});

reset.addEventListener('click', function(e){
    
    e.preventDefault();
	
	for(let i = 0; i < elements.length; i++){
		
		if(elements[i].classList.contains('active')){
			
			elements[i].remove();
			
		}

	}
	
	markedElements = 0;
		
	cleanElementsArray();
	
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

arrow.addEventListener('click', function(e){
	
	e.preventDefault();
	
	const markedArray = [];
	
	for(let i = 0; i < elements.length; i++){
		
		const target = elements[i].querySelector('.mark');
		
		if(!elements[i].classList.contains('active')){
			
			elements[i].classList.add('active');
			
			markedArray.push(elements[i]);
		
			setCircle(target);
			
		}else{
			
				elements[i].classList.remove('active');
				
				setCircle(target);
				
		}
		
	}
	
	markedElements = markedArray.length;
	
	checkCount(elements.length-markedElements);
	
	markedArray.splice(0,99999);
	
});
