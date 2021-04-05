import store from './store.js';
import { BURN } from './action/index.js';

store.subscribe(() => {
	window.result.textContent = `Quemaste ${store.getState()} calorias!`;
});

const burn = () => {
	store.dispatch({
		type: BURN,
		payload: 1.42,
	});
};

window.burn.addEventListener('click', burn);
