const form = document.forms[0];

const validate = () => {
	const userName = document.getElementById("user-name");
	const userNameError = document.getElementById("user-name-error");
	const password = document.getElementById("password");
	const passwordError = document.getElementById("password-error");

	var result = true;

	if (userName.value.trim() === "") {
		userNameError.textContent = "Username is required";
		result = false;
	}

	if (password.value.length <= 8) {
		passwordError.textContent = "Password is lesser than 8 characters";
		result = false;
	}

	return result;
};

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!validate(event)) {
		return;
	}
});
