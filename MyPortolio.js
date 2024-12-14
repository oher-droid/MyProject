// Get the modal and the button
var modal = document.getElementById("resumeModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
