let modal = document.querySelector(".modal-window");
let addBtn = document.querySelector(".add-box");//btn plus
let titleInfo = document.querySelector("input");
let descInfo = document.querySelector("textarea");
let addNote = document.getElementById("button_add_note");//add note

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

function showNotes() {
	document.querySelectorAll(".note").forEach((note) => note.remove());
	notes.forEach((notes) => {
		let noteBlock = `<li class="note">
								<div class="details">
										<p>${notes.title}</p>
										<span>${notes.description}</span>
								</div>
								<div class="buttom-content">
									<span>${notes.date}</span>
									<div class="settings">
										<i class="fa-solid fa-ellipsis fa-lg"></i>
									</div>
								</div>
							</li>`
		addBtn.insertAdjacentHTML("afterend", noteBlock);
	});
};


let closeWindow = document.getElementsByClassName("close")[0];

closeWindow.onclick = function () {
	modal.style.display = "none";
}

addBtn.onclick = function () {
	modal.style.display = "block";
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
		localStorage.setItem("notes", JSON.stringify(notes));
		closeWindow.click();
		showNotes();
	}
});
