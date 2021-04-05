video.addEventListener('click', function () {
	console.log('click');
	this.classList.add('hidden');
   //dynamic import //module.player
	import('./player.js').then(({ player }) => {
		setTimeout(() => {
			player.play();
		}, 100);
	});
});
