const addBox = document.querySelector(".add-box");
modalWindow = document.querySelector(".modal-window");
closeIcone = modalWindow.querySelector("header i");


addBox.addEventListener("click", () => {
	modalWindow.classList.add("show");
})
closeIcone.addEventListener("click", () => {
	modalWindow.classList.remove("show");
})