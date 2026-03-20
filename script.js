const Display = document.getElementById("display");
function appendDisplay(input){
    Display.value += input;
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