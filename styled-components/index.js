//armo un tagged-template para los components
//logica para los valores dinamicos
function component(strings, ...dynamicValues) {
  //creo una funcion que recibe una props como parametro
  return function (props) {
    let newContent = strings.slice();
    dynamicValues.map((value, index) => {
      newContent[index] += props[value]; //le paso el value iterado por map
    });
    return newContent.join('');
  };
}

const styled = {
  h1: function (styles) {
    return function (content) {
      //retorno una funcion para que el value(content) sea dinamico
      return `
        <h1 style='${styles}'>
            ${content}
        </h1>
        `;
    };
  },
  h2: '',
  div: '',
};

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
const Title = component`<div>${'message'} ${'name'}</div>`(props);

function render(component, container) {
  container.innerHTML = component;
}

//como tengo un id dentro del dom se me crea como windows
// render(user, window.container);

//a la funcion TitleStyled le paso el value dinamico para mostrar
render(TitleStyled(Title), window.container);
