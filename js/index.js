(function() {
    var visited = localStorage.getItem('visited');
    console.log(visited)
    if (!visited) {
      setTimeout(function() {
        document.getElementById("popupID").style.visibility = "visible";
        localStorage.setItem('visited', true);
        console.log('it worked');
      }, 1000);
    }
    if (visited) {
        document.getElementById("popupID").style.visibility = "hidden";
    }
})();


lightBoxClose = function() {
  document.querySelector(".popup").classList.add("closed");
}
