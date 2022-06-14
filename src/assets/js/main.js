(() => {
	const menuToggle = document.querySelector('.menu-toggle');
	console.log(menuToggle);

	menuToggle.addEventListener('click', () => {
		document.body.classList.toggle('menu-active');
	});
})();
