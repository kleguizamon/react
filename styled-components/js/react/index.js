//armo un tagged-template para los components
//logica para los valores dinamicos
function component(strings, ...dynamicValues) {
	//creo una funcion que recibe una props como parametro
	return function (props) {
		let newContent = strings.slice(); //genero una copia de los string
		dynamicValues.map((value, index) => {
			newContent[index] += props[value]; //le paso el value iterado por map
		});
		return newContent.join('');
	};
}

export { component };
