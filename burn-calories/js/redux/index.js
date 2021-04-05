const createStore = (reducer, initialState) => {
	//state va a ser dinamico
	let state = initialState;
	//updater arranca como un fn vacia
	let updater = () => {};

	const getState = () => state;

	/* dispatch de acciones
		Le paso la accion y estado al reducer y 
      lo que retorna es el nuevo estado */
	const dispatch = (action) => {
		state = reducer(state, action);
		//llamo a update por que hay cambios de estado
		updater();
	};
	/* cambios de estado
		updater pasa a ser listener que es la funcion
		que llamamos abajo */
	const subscribe = (listener) => {
		updater = listener;
	};

	return {
		getState,
		dispatch,
		subscribe,
	};
};

export {
   createStore
}