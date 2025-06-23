let handlePromise = (age) => {
	return new Promise((resolve, reject) => {
		if (Number(age) >= 18) {
			setTimeout(() => {
				
				resolve("You can vote.");
			}, 4000);
		} else {
			setTimeout(() => {
				reject("You aren't old enough.");
			}, 4000);
		}
	});
};

let handleSubmit = () => {
	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;

	if (!age || !name) {
		window.alert("Please enter valid details");
		return;
	}

	handlePromise(age)
		.then((message) => {
			window.alert(message);
		})
		.catch((errorMessage) => {
			window.alert(errorMessage);
		});
};
