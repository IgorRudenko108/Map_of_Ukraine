function addLoadedClass() {
	window.addEventListener("load", function () {
		setTimeout(function () {
			document.documentElement.classList.add('loaded');
		
		}, 0);

		
		
	});
}

addLoadedClass();

window.onload = function() {
	let preloader = document.querySelector('.loader');
	preloader.classList.add('hide-preloader');
	setInterval(function() {
			preloader.classList.add('preloader-hidden');
	}, 990);
}



