//Aqui to importando o React e o useState do React
import { useState } from 'react'
import './App.css'
//aqui to importando os componentes Header e Footer que criei, lembrar sempre de importar
import Header from './Components/Layout/Header.jsx'
import Footer from './Components/Layout/Footer.jsx' 

//minha função App que é o componente principal da aplicação
function App() {
  return (
    <>
    {/* Aqui to usando os componentes Header e Footer que criei */}
      <Header />
      <Footer />
    </>
  )
}

export default App
