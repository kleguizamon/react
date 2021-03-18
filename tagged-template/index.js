function taggedTemplate(strings, ...dynamicValues) {
  let newContent = '';
  strings.map((string, index) => {
    const strong = dynamicValues[index]
      ? `<strong>${dynamicValues[index]}</strong>`
      : '';
    // newContent = newContent + string + strong;
    newContent += `${string} ${strong}`;
  });
  return `<p>${newContent}</p>`;
}
const message = taggedTemplate`El ${'trabajo duro'} supera al ${'talento natural'}`;
document.body.innerHTML = message;
//   function taggedTemplate(strings, param1, param2) {
//     console.log(strings, param1, param2);
//   }
//   taggedTemplate`hola${'mundo'}${'!'}`;
