import { component as Component } from '../react/index.js';
import styled from '../../styled-components/index.js';
//llamo a mi styled Component y lo utilizo como un tagged-template
const TitleStyled = styled.h1`
	color: blue;
	font-size: 50px;
	text-shadow: 2px 2px 0 black;
	line-height: 100vh;
`;

const props = {
	message: 'hello',
	name: 'kevin',
};
//leo la props y encuentro el campo message y dsp le paso (props) y espero
//que el resultado sea una funcion por eso la creo arriba
// const Title = component`---${'message'}---${'name'}`(props);
const Title = Component`<div>${'message'} ${'name'}</div>`(props);

export default TitleStyled(Title);