import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Meals from './Meals'

const App = () => {
  return (
    <div className=' font-primary'>
      <Navbar/>
      <Home/>
      <Meals/>
    </div>
  )
}

export default App