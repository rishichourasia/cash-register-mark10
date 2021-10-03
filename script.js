let notesAvailable = ["2000", "500", "100", "20", "10", "5", "1"];

const billAmount = document.querySelector("#bill-amount");
const paidAmount = document.querySelector("#paid-amount");
const button = document.querySelector("#btn");
const errMsg = document.querySelector(".err");
// const errBody = document.querySelector(".negative");
const innerTable = document.querySelector(".inner-table");
const returnAmount = document.querySelector(".h4");
const noteNumber = document.querySelectorAll(".noteNo");
const table = document.querySelector(".centre");

button.addEventListener("click", function calculateAmount() {
	removeClasses();
	// innerTable.innerHTML = "";
	for (i = 0; i < notesAvailable.length; i++) {
		noteNumber[i].textContent = "";
	}

	const billAmt = parseInt(billAmount.value);
	const paidAmt = parseInt(paidAmount.value);

	if (billAmt > 0) {
		if (paidAmt >= billAmt) {
			table.style.display = "flex";
			const amToPay = paidAmt - billAmt;
			calculateAmt(amToPay);
			returnAmount.innerText = `Return Cash Amount for bill ₹${paidAmt} - ₹${billAmt}  = ₹${amToPay}`;
		} else {
			addClasses();
			errorMessage("Will you pay more or should i call 911?");
		}
	} else {
		addClasses();
		errorMessage("Enter Valid Bill Amount");
	}
	billAmount.value = "";
	paidAmount.value = "";
});

function errorMessage(msg) {
	errMsg.innerText = msg;
}

function removeClasses() {
	// errBody.classList.remove("message");
	errMsg.classList.remove("negative");
	errMsg.innerText = "";
}

function addClasses() {
	// errBody.classList.add("message");
	errMsg.classList.add("negative");
	table.style.display = "none";
	returnAmount.innerText = "";
}

function calculateAmt(amt) {
	for (i = 0; i < notesAvailable.length; i++) {
		const noOfNotes = Math.trunc(amt / notesAvailable[i]);
		amt = amt % notesAvailable[i];

		if (noOfNotes != 0) {
			noteNumber[i].textContent = noOfNotes;
			// 	innerTable.innerHTML += `<tr>
			//     <td>₹${notesAvailable[i]}</td>
			//     <td class="no-of-notes">${noOfNotes}</td>
			//   </tr> `;
		}
	}
}
