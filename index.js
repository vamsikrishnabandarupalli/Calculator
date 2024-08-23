const display = document.getElementById("disp");
function appendToDisp(btnvalue){
    display.value += btnvalue;
}
function clearall(){
    display.value="";
}
function del(){
    display.value = (display.value).toString().slice(0, -1);
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="Math Error"
    }
}

