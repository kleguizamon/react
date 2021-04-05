import { render } from './react-dom/index.js';
import Title from './components/index.js'
//como tengo un id dentro del dom se me crea como windows
// render(user, window.container);

//a la funcion TitleStyled le paso el value dinamico para mostrar
render(Title, window.container);
