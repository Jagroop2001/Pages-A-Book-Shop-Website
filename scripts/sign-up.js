const form = document.forms[0];

const validate = (event) => {
	var firstNameInput = document.getElementById("first-name");
	var firstNameError = document.getElementById("first-name-error");
	var firstNameValue = firstNameInput.value.trim();

	if (firstNameValue === "") {
		firstNameError.textContent = "First name is required";
		event.preventDefault();
	} else {
		firstNameError.textContent = "";
	}
};

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const fname = form.querySelector('[name="Firstname"]').value;
	const lname = form.querySelector('[name="Lastname"]').value;
	const usname = form.querySelector('[name="Username"]').value;
	const mail = form.querySelector('[name="Email"]').value;
	const pwd = form.querySelector('[name="Password"]').value;
	const conpwd = form.querySelector('[name="Confirm"]').value;

	const data = {
		fname,
		lname,
		usname,
		mail,
		pwd,
	};

	// Convert the JavaScript object to a JSON string
	const jsonString = JSON.stringify(data);

	// Create a Blob object with the JSON string
	const blob = new Blob([jsonString], { type: "application/json" });

	// Create a URL for the Blob
	const url = URL.createObjectURL(blob);

	// Create a link element
	const link = document.createElement("a");
	link.href = url;
	link.download = "formData.json"; // Specify the filename

	// Append the link to the document body and click it programmatically
	document.body.appendChild(link);
	link.click();

	// Clean up
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
});
