function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, contenu, menu;
  contenu = document.getElementsByClassName("contenu");
  for (i = 0; i < contenu.length; i++) {
    contenu[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  menu = document.getElementsByClassName("menu");
  for (i = 0; i < menu.length; i++) {
    menu[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// copyright
let year = new Date().getFullYear();
document.getElementById("annee").innerHTML = year;
