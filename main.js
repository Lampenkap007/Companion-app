window.addEventListener("load", (e) => {
  console.log("DOM loaded :)");
});

// Logic for navigation
function tab1(){
  document.getElementById("tab1").style.opacity = "100%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "To-Do List";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen3").style.display = "none";
  document.getElementById("screen1").style.display = "block";
}
function tab2(){
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "100%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "New Item";
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen3").style.display = "none";
  document.getElementById("screen2").style.display = "block";

}
function tab3(){
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "100%";
  document.getElementById("title").innerHTML = "Settings";
  document.getElementById("screen2").style.display = "none";
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen3").style.display = "block";
}

