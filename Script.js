const userinput = document.getElementById("userinput");

var expresion = '';

function press(num){
    expresion += num;
    userinput.value = expresion;
    if (num == '&'){
        expresion = ''
        userinput.value = expresion;

    }
}
function equal(){
    userinput.value = eval(expresion);
    expresion = userinput.value;
}