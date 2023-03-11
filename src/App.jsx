import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Blogs from './components/Blogs/Blogs'
import Tutorials from './components/Tutorials/Tutorials'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blogs />
      <Tutorials/>
      <Contact/>
    </div>
  )
}

export default App
