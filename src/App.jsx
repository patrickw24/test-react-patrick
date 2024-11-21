import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './ScreenComponent/Home'
import { TaskForm } from './ScreenComponent/TaskForm'
import { NavBar } from './ScreenComponent/NavBar'

function App() {

  

  return (
    <>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>} ></Route>
      <Route path='/form' element= {<TaskForm/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
