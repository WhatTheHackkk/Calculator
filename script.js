const Display = document.getElementById("display");
function appendDisplay(input){
    if(Display.value == "Syntax Error!"){
        null;
    }
    else{
    Display.value += input;
    }
}
function Clearall(){
    Display.value = '' ;
}
function Calculate(){
    try{
        Display.value = eval(Display.value);
    }
    catch(error){
        Display.value = "Syntax Error!";
    }
}
function Del(){
    const x = Display.value.length;
    let i = 0
    let y = '';
    for(i ; i < x-1 ; i++){
        y += Display.value[i];
    }
    Display.value = y;
}
