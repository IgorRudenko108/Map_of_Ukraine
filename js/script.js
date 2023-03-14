


		// -- tooltip ----------------------------------------------------
		let regionLink = document.querySelectorAll('.map-top__region');
		let tooltip = document.querySelector('.tooltip');

		regionLink.forEach((item) => {
			item.addEventListener('mouseenter', function() {
				tooltip.textContent = item.getAttribute('data-title');
				tooltip.style.display = 'block';
				tooltip.style.opacity = 1;
			});

			item.addEventListener('mouseleave', function() {
				tooltip.textContent = item.getAttribute('data-title');
				tooltip.style.display = 'none';
			});

			item.addEventListener('mousemove', function(e) {
				tooltip.style.top = (e.y + 20) + 'px';
				tooltip.style.left = (e.x + 20) + 'px';
				tooltip.style.zIndex = 99999999;
			});
		});
		// -- tooltip ----------------------------------------------------



		//-- додавання класів для кнопки знімку екрана ------------------------------------------------------------------------------------------------
		const fotoBtn = document.querySelector('#tryhtml2canvas');
		const fotoBtnBox = document.querySelector('.css-ghzv10');
		const fotoBtnBody = document.querySelector('.css-101ncaf');
		const fotoBtnText = document.querySelector('.css-1f0dz3x');

		if (fotoBtn) {
			fotoBtn.addEventListener("click", function (e) {
				fotoBtnBox.classList.toggle('css-1oz4tqn');
				fotoBtnBody.classList.toggle('css-1owq2hv');
				fotoBtnText.classList.toggle('css-5sa19j');
			});
		}
		//-- /додавання класів для кнопки знімку екрана ------------------------------------------------------------------------------------------------


		//-- додавання класів для кліку на карту ------------------------------------------------------------------------------------------------
		const mapTopItem = document.querySelectorAll('.map-top__region');

		mapTopItem.forEach((item) => {
		item.addEventListener("click", function (e) {
		item.classList.toggle('region__active');
		});
		});
		//-- додавання класів для кліку на карту ------------------------------------------------------------------------------------------------





		const elm = document.querySelector(".convert");

		html2canvas(elm).then(canvas => {
		document.querySelector(".result").appendChild(canvas)

		let cvs = document.querySelector("canvas");
		let a = document.querySelector('.css-13mo65m');
		// a.href = cvs.toDataURL("image/jpeg");
		// a.download = "html2canvas.jpeg";
		a.href = cvs.toDataURL();
		a.download = "html2canvas.png";
		});


		var svgElements = document.body.querySelectorAll('svg');
		svgElements.forEach(function(item) {
		item.setAttribute("width", item.getBoundingClientRect().width);
		item.setAttribute("height", item.getBoundingClientRect().height);
		item.style.width = null;
		item.style.height= null;
		});