import 'https://vjs.zencdn.net/7.8.4/video.js';

console.log('importado el player');

ps5.classList.remove('hidden');

//configuracion basica de video.js
const player = videojs('ps5', {
	controls: true,
	preload: 'auto',
});

export { player };
