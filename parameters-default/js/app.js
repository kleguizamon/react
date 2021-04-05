import { makeIceCream } from './icecream/icecream-machine.js';

const $flavors = document.querySelectorAll('.flavor');

$flavors.forEach(($element) =>
	$element.addEventListener('click', selectFlavor)
);

function selectFlavor() {
	this.classList.toggle('is-active');
}

window.btn.addEventListener('click', () => {
	const $flavors = document.querySelectorAll('.flavor.is-active');
	try {
		makeIceCream([...$flavors]);
	} catch (error) {
		alert('no completaste los sabores');
	}
});
