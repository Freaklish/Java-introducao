let count = 0;
var range = [-9, 9];
const CURRENT_NUMBER = document.getElementById('currentNumber');





function increment() {
   
 if(count <10 ){
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if(count >= range[0] && count <= range[1]) {
        CURRENT_NUMBER.style.color='black'
    
    }
     else {
        CURRENT_NUMBER.style.color='red'
       
    }
}
}

function decrement() {
   
    if(count >-10){
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if(count >= range[0] && count <= range[1]) {
        CURRENT_NUMBER.style.color='black'
    
    }
     else {
        CURRENT_NUMBER.style.color='blue'
    }
}
    
}

function test() {
	kdowkdpo;
}

    
