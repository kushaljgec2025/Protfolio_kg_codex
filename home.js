var tablinks = document.getElementsByClassName("tab-links");
var tablists = document.getElementsByClassName("tablist");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tablist of tablists){
        tablist.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
   
}
function menuBarOpen(){
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";

    } else {
      x.style.display = "block";
      
    }
}
