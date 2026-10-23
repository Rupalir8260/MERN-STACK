var display = document.getElementById("display");
var first = "";
var second="";
var result = "";
var op = null;

function inputNumber(value){
    if(op===null&&first===""){
        result = result+value;
        // console.log('first',first,"value",value);
        display.value=result;
    }else{
        second+=value;
        display.value=second;
    }
}

function operatorAdd(takeOp){
    op=takeOp;
    first=result;
    second="";
    document.getElementById("operator").innerText=takeOp;
}


function clearAll(){
    op=null;
    first="";
    second="";
    result="";
    display.value=0;
}

function equal(){
    if(first===""&& second===""&& result===""){
              alert("please enter number!")
     return;
    }
    result = eval(first+op+second);
    display.value=result;
    first="";
    second="";
    document.getElementById("operator").innerText="";
    op=null;
    
}
function backspace(){ 
    if(op===null){
        result=result.toString().slice(0,-1);
        display.value=result||"0";
    } else{
        second=second.slice(0,-1);
        display.value=second||"0";
    }
}

