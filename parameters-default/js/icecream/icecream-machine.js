import { isRequired } from './validations.js';

function makeIceCream([
	flavor1 = isRequired('flavor1'),
	flavor2 = isRequired('flavor2'),
	...otherFlavors
]) {
	//como valor por defecto le paso una funcion donde valido los parametros
	const toppings = otherFlavors.map((f) => f.dataset.flavor);
	//para acceder a mi data-flavor lo hago con dataset
	alert(
		`armaste un  helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}! con los topping ${toppings}`
	);
}

export { makeIceCream };
