const form = document.forms[0];

const validate = () => {
	const firstName = document.getElementById("first-name");
	const firstNameError = document.getElementById("first-name-error");
	const lastName = document.getElementById("last-name");
	const lastNameError = document.getElementById("last-name-error");
	const userName = document.getElementById("user-name");
	const userNameError = document.getElementById("user-name-error");
	const email = document.getElementById("email");
	const emailError = document.getElementById("email-error");
	const password = document.getElementById("password");
	const passwordError = document.getElementById("password-error");
	const confirmpassword = document.getElementById("confirm-password");
	const confirmpasswordError = document.getElementById(
		"confirm-password-error"
	);


	var result = true;

	if (firstName.value.trim() === "") {
		firstNameError.textContent = "First name is required";
		result = false;
	}

	if (lastName.value.trim() === "") {
		lastNameError.textContent = "Last name is required";
		result = false;
	}
	if (userName.value.trim() === "") {
		userNameError.textContent = "Username is required";
		result = false;
	}
	if (email.value.trim() === "") {
		emailError.textContent = "Email/Phone no. is required";
		result = false;
	}
	if (password.value.length <= 8) {
		passwordError.textContent = "Password is lesser than 8 characters";
		result = false;
	}
	if (password.value !== confirmpassword.value) {
		confirmpasswordError.textContent = "Passwords don't match";
		result = false;
	}

	return result;
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!validate(event)) {
		return;
	}

	const fname = form.querySelector('[name="Firstname"]').value;
	const lname = form.querySelector('[name="Lastname"]').value;
	const usname = form.querySelector('[name="Username"]').value;
	const mail = form.querySelector('[name="Email"]').value;
	const pwd = form.querySelector('[name="Password"]').value;

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
