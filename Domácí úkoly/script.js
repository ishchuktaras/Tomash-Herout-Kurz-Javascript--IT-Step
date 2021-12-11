
// Když klikneme na tlačítko, přepíná mezi skrytím a zobrazením rozbalovacího obsahu 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Zavře rozevírací nabídku, pokud uživatel klikne mimo ni

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}