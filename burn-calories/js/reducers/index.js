import { BURN } from '../action/index.js';

const reducer = (state, { type, payload }) => {
	//evaluo segun tipo de accion
	switch (type) {
		case BURN:
			return state + payload;
		default:
			return state;
	}
};

export default reducer;
