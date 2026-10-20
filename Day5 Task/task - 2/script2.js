
    const subbtn = document.getElementById("subbtn");
    const username = document.getElementById("name");
    const resetbtn =document.getElementById("resetbtn");
    
    subbtn.addEventListener("click",(event)=>{
        event.preventDefault();//stop page reload
        const name=document.getElementById("name").value.trim();
        const email=document.getElementById("email").value.trim();
        const password=document.getElementById("password").value.trim();
        const user = username.value;
        if (name===""||email===""||password===""){
            alert("please fill in all fields!");

        }else{
            alert(`Welcome,${user}!`);
        }

    });
    resetbtn.addEventListener("click",()=>{
        window.location.reload();

    });
