


let handleSubmit = () => {
	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;

	if (!age || !name) {
		window.alert("Please enter valid details");
		return;
	}

	
	let promise =  new Promise((resolve, reject) => {
		if (Number(age) >= 18) {
			setTimeout(() => {
				
				resolve(`Welcome, ${name}. You can vote.`);
			}, 4000);
		} else {
			setTimeout(() => {
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}, 4000);
		}
	});
	
		promise.then((message) => {
			window.alert(message);
		})
		.catch((errorMessage) => {
			window.alert(errorMessage);
		});
};
