
//itero los tags para que sean dinamicos
const tags = [
   'head',
   'tittle',
   'body',
   'section',
   'nav',
   'hearder',
   'footer',
   'main',
   'p',
   'h1',
   'h2',
   'h3',
   'h4',
 ];
 const styled = {};
 tags.map((tags) => {
   styled[tags] = function (styles) {
     //styles en este caso seria mi string de estilos
     return function (content) {
       //retorno una funcion para que el value(content) sea dinamico
       return `
         <${tags} style='${styles}'>${content}</${tags}>`;
     };
   };
 });

 export default styled;