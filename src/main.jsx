// Importa o StrictMode do React, que é tipo um "modo hardcore de checagem"
// Ele não muda nada visualmente, mas ajuda a achar problemas no código
import { StrictMode } from 'react'

// Importa a função createRoot do React 18+, que é como inicializamos o React na página
import { createRoot } from 'react-dom/client'
import './index.css'

// Importa o componente principal da aplicação, geralmente é onde tudo começa
import App from './App.jsx'

// Aqui pegamos o elemento HTML que tem id="root" e transformamos em um "root do React"
// É nele que todo o React vai renderizar
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Colocamos o App dentro do StrictMode */}
    {/* Ou seja, o App vai ser renderizado dentro do modo de checagem do React */}
    <App />
  </StrictMode>,
)
