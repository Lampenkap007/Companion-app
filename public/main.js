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

// Logic for saving form
function saveForm(){
  if (document.getElementById("formTitle").value == ""){
    alert("Title required")
  }
  else{
      const form = {title: document.getElementById("formTitle").value, deadline: document.getElementById("formDeadline").value, description: document.getElementById("formDescription").value};
  console.log(form)
 document.getElementById("screen1").innerHTML = "<div class='card'><div>   <h1 id='cardTitle'>" + form.title + "</h1>   <h3 id='cardDeadline'>"+ form.deadline + "</h3>   <p id='cardDescription'>"+ form.description + "</p></div><div class='editDelete'><i class='fas fa-edit'></i><i class='far fa-trash-alt'></i></div></div>"
tab1()
}
}

