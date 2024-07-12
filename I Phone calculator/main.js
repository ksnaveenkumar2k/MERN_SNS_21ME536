var disp = document.getElementById("display")

function appendToDisplay(value){
    disp.value +=value;
}

function clearToDisplay(){
    disp.value='';
}

function calculate(){
    var equation =disp.value
    try{
        disp.value =eval(equation);
    }
    catch(e){
        disp.value ="SyntexError";
    }
   
}

function backspace(){
    var bcl =disp.value
    bcl=bcl.slice(0,bcl.length-1)
    disp.value=bcl
}


function negate(){
    disp.value*=-1;
}
