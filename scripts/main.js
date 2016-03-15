var button = document.querySelector('button');

button.addEventListener('click', loadButton);
button.addEventListener('click', buttonTimeout);


function loadButton() {
	button.innerHTML = ('Loading...');
	document.getElementById('button').disabled = true;
};

function buttonTimeout() {
	setTimeout(function(){ 
		button.innerHTML = ('Submit');
		document.getElementById('button').disabled = false;
	}, 3000);
};



