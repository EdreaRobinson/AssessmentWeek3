console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Thank you! Your form has been submitted successfully.");
	// console.log('form submit');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function mouseoverPic() {
	alert("Nice job!");
}

let rubberDuck = document.querySelector('#rubber-duck');

rubberDuck.addEventListener('mouseover', mouseoverPic);