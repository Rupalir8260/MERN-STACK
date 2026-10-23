function colorChange(color){
 document.getElementById("colorText").style.color=color;
}
function fontchange(){
    const font=document.getElementById('Changevalue').value;
    document.getElementById("fontfamily").style.fontFamily  = `${font}`;

}
let fontSize=parseFloat(window.getComputedStyle(document.getElementById("fontSize")).fontSize);
function increaseSize(){
    fontSize++;
    document.getElementById("fontSize").style.fontSize = fontSize +"px";
}
function decreaseSize(){
    fontSize--;
    document.getElementById("fontSize").style.fontSize = fontSize +"px";
}
function resetSize(){
    fontSize=16;
    document.getElementById("fontSize").style.fontSize=fontSize+"px";
}

//font style
const fontStyle=document.getElementById("fontStyle");
const boldbtn=document.getElementById("boldbtn");
boldbtn.addEventListener("click",()=>{
     fontStyle.style.fontWeight="bold";
});
const italicbtn=document.getElementById("italicbtn");
italicbtn.addEventListener("click",()=>{
    fontStyle.style.fontStyle="italic";
});
const underlinebtn=document.getElementById("underlinebtn");
underlinebtn.addEventListener("click",()=>{
    fontStyle.style.textDecoration="underline";
});
