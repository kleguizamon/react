import { createStore } from './redux/index.js';
import reducer from './reducers/index.js';

//fn reducer que evalua el comportamiento de mis acciones
const store = createStore(reducer, 0);

export default store;
