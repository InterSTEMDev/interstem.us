(function() {
    var visited = localStorage.getItem('visited');
    console.log(visited)
    if (!visited) {
      setTimeout(function() {
        document.querySelector(".popup").classList.add("animated", "fadeInUp");
        document.getElementById("popupID").style.visibility = "visible";
        localStorage.setItem('visited', true);
        console.log('it worked');
      }, 5000);
    }
    if (visited) {
        document.getElementById("popupID").style.visibility = "hidden";
    }
})();


lightBoxClose = function() {
  document.querySelector(".popup").classList.remove("fadeInUp");
  document.querySelector(".popup").classList.add("fadeOutDown");
}

setInterval(function () {document.getElementById("btnforslide2").click();}, 8000);
