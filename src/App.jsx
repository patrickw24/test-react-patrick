import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './ScreenComponent/Home'

function App() {

  let url= import.meta.env.VITE_URL

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
