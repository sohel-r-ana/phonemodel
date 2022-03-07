// ☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉☉

// hello there wellcome


// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\\
//on this section i detect all elements ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓\\

var ak = document.getElementById("dot");
var open = document.getElementById("open"); 
var al =document.getElementById("cross");
var dspl = document.getElementById("dspl");
var one = document.querySelector(".one");
var mnmz = document.getElementById("mnmz");
var imag = document.getElementById('imag');
var click = document.querySelector("#abc");
var imag = document.querySelector("#imag");
var home = document.getElementById("home");
var phone = document.getElementById("phone");


// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\\
//on this section i program all elements ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓\\

al.addEventListener("click", function()
{
    var ak = document.getElementById("dot");
    ak.style.display="none";
});

open.addEventListener("click", function()
{
    ak.style.display="flex";
    open.style.display="flex";
});

 dspl.addEventListener("click" , function()
 {
   phone.style.display="flex";
   open.style.fontSize="40px";
   dspl.classList.add("newone");
   setTimeout(() => {
       this.classList.remove("newone");
   }, 1000);
 });
 mnmz.addEventListener("click", function()
 {
     phone.style.display="none";
 });

 click.addEventListener("click" , function()
 {
    
    imag.src="Dna.mp4";
    imag.style.display="flex"
   });
home.addEventListener("click", function()
{
    imag.src="#";
    imag.style.display="none"
});


// ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ \\