window.addEventListener("load", (e) => {
  console.log("DOM loaded :)");
});
// Logic for updating list
function getDB() {
  document.getElementById("screen1").innerHTML = ""
  setTimeout(function() {
      $.ajax({
          url: "http://192.168.1.167:2222/items",
          success: function(whatyougot) {
              var i;
              for (i = 0; i < whatyougot.length; i++) {
                  document.getElementById("screen1").innerHTML = document.getElementById("screen1").innerHTML + '<div class="card"><div><h1 id="cardTitle">' + whatyougot[i].title + '</h1><h3 id="cardDeadline">' + whatyougot[i].deadline + '</h3><p id="cardDescription">' + whatyougot[i].description + '</p></div><div class="editDelete"><i onclick=editItem("' + whatyougot[i]._id + '") class="fas fa-edit"></i><i onclick=deleteItem("' + whatyougot[i]._id + '") class="far fa-trash-alt" ></i></div></div>'
              }
          },
      });
  }, 500);
}

// Logic for loading all content from API
$.ajax({
  url: "http://192.168.1.167:2222/items",
  success: function(whatyougot) {
      var i;
      for (i = 0; i < whatyougot.length; i++) {
        document.getElementById("screen1").innerHTML = document.getElementById("screen1").innerHTML + '<div class="card"><div><h1 id="cardTitle">' + whatyougot[i].title + '</h1><h3 id="cardDeadline">' + whatyougot[i].deadline + '</h3><p id="cardDescription">' + whatyougot[i].description + '</p></div><div class="editDelete"><i onclick=editItem("' + whatyougot[i]._id + '") class="fas fa-edit"></i><i onclick=deleteItem("' + whatyougot[i]._id + '") class="far fa-trash-alt" ></i></div></div>'
      }
  },
});
// Logic for navigation
function tab1() {
  document.getElementById("tab1").style.opacity = "100%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "To-Do List";
  document.getElementById("screen2").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "hidden";
  document.getElementById("screen1").style.visibility = "visible";
}

function tab2() {
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "100%";
  document.getElementById("tab3").style.opacity = "25%";
  document.getElementById("title").innerHTML = "New Item";
  document.getElementById("screen1").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "hidden";
  document.getElementById("screen2").style.visibility = "visible";

}

function tab3() {
  document.getElementById("tab1").style.opacity = "25%";
  document.getElementById("tab2").style.opacity = "25%";
  document.getElementById("tab3").style.opacity = "100%";
  document.getElementById("title").innerHTML = "Settings";
  document.getElementById("screen2").style.visibility = "hidden";
  document.getElementById("screen1").style.visibility = "hidden";
  document.getElementById("screen3").style.visibility = "visible";
}




// Logic for saving to db
function saveForm() {
  if (document.getElementById("formTitle").value == "") {
      alert("Title required")
  } else {
      $.ajax({
          type: 'POST',
          url: 'http://192.168.1.167:2222/items',
          data: '{"title":"' + document.getElementById("formTitle").value + '", "description":"' + document.getElementById("formDescription").value + '", "deadline":"' + document.getElementById("formDeadline").value + '"}',
          contentType: "application/json",
          dataType: 'json'
      });
      tab1()
      getDB()
document.getElementById("formTitle").value = null
document.getElementById("formDescription").value = null
  }
}

//logic for deleting item
function deleteItem(itemId) {
  $.ajax({
      type: 'DELETE',
      url: 'http://192.168.1.167:2222/items/' + itemId,
  });
  getDB()
}

//Logic for editing item
function editItem(itemId) {
  $.ajax({
    url: "http://192.168.1.167:2222/items/" + itemId,
    success: function(whatyougot) {
       document.getElementById('formTitle').value = whatyougot.title
       document.getElementById('formDescription').value = whatyougot.description
       tab2()
      document.getElementById("title").innerHTML = "Edit Item";
       deleteItem(itemId)
    },
});
}