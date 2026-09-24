function promptsayhi()
{
    var Name = document.getElementById("fname").value;
    // let Name= prompt("Name");
    // alert(`hello,${Name}`)
    document.getElementById("changeable").innerText=`hello!....${Name}😊`;
}
function promptReset()
{
    var Name = document.getElementById("fname").value="";
    document.getElementById("changeable").innerText=`Welcome 👋`;
}
function promptAlert()
{
    var Name = document.getElementById("fname").value;

    if(Name===""){
        alert("Name is not given!")
    }else{

        alert(`hello!....${Name||"User"}😊`);
    }
    }
    