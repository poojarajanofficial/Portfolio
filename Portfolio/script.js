var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
     document.getElementById(tabname).classList.add("active-tab")
}

// Resposive Menu Bar//



const button =document.getElementsByClassName("btn")[0];
const navbarlinks=document.getElementsByClassName("navbar-links")[0];


button.addEventListener("click",()=>{
    navbarlinks.classList.toggle("active")
})







