window.addEventListener("load", (e) => {
  console.log("DOM loaded :)");
});

// Logic for navigation
function tab1(){
  document.getElementById("tab1").style.opacity = "100%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "To-Do List";
  document.getElementById("screen2").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "hidden";
  document.getElementById("screen1").style.visibility = "visible";
}
function tab2(){
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "100%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "New Item";
  document.getElementById("screen1").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "hidden";
  document.getElementById("screen2").style.visibility = "visible";

}
function tab3(){
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "100%";
  document.getElementById("title").innerHTML = "Settings";
  document.getElementById("screen2").style.visibility = "hidden";
  document.getElementById("screen1").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "visible";
}



