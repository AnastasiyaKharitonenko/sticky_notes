let modal = document.querySelector(".modal-window");
let btn = document.querySelector(".add-box");
// Get the <span> element that closes the modal
let closeWindow = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
closeWindow.onclick = function() {
	modal.style.display = "none";
 }
 
btn.onclick = function(){
	modal.style.display = "block";
}
