import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.getElementById('root')
);

/* 
PascalCase -> Componentes
camelCase -> Funciones normales
snake_case -> Variables
kebab-case -> html/css
*/

// función normal que no es un componente
const createButton = ({text}) => {
  return (
    <button>Hola caracola {text}</button>
  )
}

// función normal que no es un componente
const Button = ({text}) => {
  return (
    <button>Hola caracola {text}</button>
  )
}

root.render(
  <>
    { /* 
      Declaración imperativa de un componente  
      createButton({text: 'btn 1'}) */
    }

    { /* Declaración por declarativa */ }
    <Button text="asa"></Button>
    
  </>
);
