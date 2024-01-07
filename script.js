//your JS code here. If required.
// Get the modal and the button
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});