
// Recomendados
// Condicional
const body1 = document.querySelector('body'); // retorna o elemento ou null
// body1?.style.background = 'red';
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; // a certeza que o body existe
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Não recomendados

// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assetion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
