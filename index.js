let screen = document.getElementById("screen")


if(screen.value === '') {
		screen.value = '0';
	}


 function appendToScreen(input){
     if(screen.value === '0'){
		screen.value = '';
	}
	if(screen.value === "SyntaxError" || screen.value === "ReferenceError" || screen.value === "NaN"){
	    screen.value = '';
	}
    screen.value += input;
}







function clearScreen(){
    screen.value = '0';
}


function backspace(){
   if(screen.value === "SyntaxError" || screen.value === "ReferenceError" || screen.value === "NaN"){
	    screen.value = "0";
        
    }else{
    screen.value = screen.value.slice(0, - 1); 
if(screen.value === '') {
		screen.value = '0';
   }
    }
}


function calculate(){
    try {
    screen.value = eval(screen.value)
    } catch (e) {
        screen.value = e.name
    }
    
}


