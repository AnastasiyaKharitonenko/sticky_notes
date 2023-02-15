let modal = document.querySelector(".modal-window");
let settings = document.querySelector(".settings");
let addBtn = document.querySelector(".add-box");//btn plus
let titleInfo = document.querySelector("input");
let descInfo = document.querySelector("textarea");
let addNote = document.getElementById("button_add_note");//add note

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

function showNotes() {
	document.querySelectorAll(".note").forEach((note) => note.remove());
	notes.forEach((notes, index) => {
		let noteBlock = `<li class="note">
								<div class="details">
										<p>${notes.title}</p>
										<span>${notes.description}</span>
								</div>
								<div class="buttom-content">
									<span>${notes.date}</span>
									<div class="settings">
									<i onclick="showMenu(this)"class="fa-solid fa-ellipsis fa-lg"></i>
									<ul class="menu">
										<li onclick = "updateNote(${index}, ${notes.title}, ${notes.description})"><i class="fa-regular fa-pen-to-square fa-xm"></i>Edit</li>
										<li onclick = "deleteNote(${index})"><i class="fa-solid fa-trash fa-xm"></i>Delete</li>
									</ul>
								</div>
								</div>
							</li>`
		addBtn.insertAdjacentHTML("afterend", noteBlock);
	});
};


let closeWindow = document.getElementsByClassName("close")[0];

closeWindow.onclick = function () {
	titleInfo.value = "";
	descInfo.value = "";
	modal.style.display = "none";

}

function showMenu(elem) {
	elem.parentElement.classList.add("show");
	document.addEventListener("click", e => {
		if (e.target.tagName != "I" || e.target != elem) {
			elem.parentElement.classList.remove("show");
		}
	});
};


function deleteNote(noteID){
	notes.splice(noteID,1);
	localStorage.setItem("notes", JSON.stringify(notes));
	showNotes();

}
deleteNote();


function updateNote(noteID, title, desc){
	addBtn.click();
	addNote.innerText() ="U"
}

updateNote();

addBtn.onclick = function () {
	modal.style.display = "block";
	settings.style.display = "none";
}

addNote.addEventListener("click", e => {
	e.preventDefault();
	let titleNote = titleInfo.value;
	let descNote = descInfo.value;

	if (titleNote || descNote) {
		let dateObj = new Date();
		let month = months[dateObj.getMonth()];
		let day = dateObj.getDate();
		let year = dateObj.getFullYear();

		let noteInfo = {
			title: titleNote,
			description: descNote,
			date: `${month} ${day}, ${year}`
		}
		notes.push(noteInfo);

		closeWindow.click();
		showNotes();
	}
});
