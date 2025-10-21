//Aqui to importando o React e o useState do React
import { useState } from 'react'
import './App.css'
//aqui to importando os componentes Header e Footer que criei, lembrar sempre de importar
import Header from './Components/Layout/Header.jsx'
import Footer from './Components/Layout/Footer.jsx' 
import Home from './Components/Home/Home.jsx'
import Sobre from './Components/Sobre/Sobre.jsx'

//minha função App que é o componente principal da aplicação
function App() {
  return (
    <>
    {/* Aqui to usando os componentes Header e Footer que criei */}
      <Header />
      <Home />
      <Sobre />
      <Footer />
    </>
  )
}

export default App
