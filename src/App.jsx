import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Main from './Components/Main/main'
import FloatingWhatsApp from './Components/floating-whatsapp'

function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    <FloatingWhatsApp />
    </>
  )
}

export default App
