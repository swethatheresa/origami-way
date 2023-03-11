import React from 'react'
import './Tutorials.css'
import rabbit from '../../assets/rabbit.jpeg'
import frog from '../../assets/frog.jpeg'
import bird from '../../assets/bird.jpg'
function Tutorials() {
  return (
    <div className="container" id='tutorials'>
      <h1>Learn the art</h1>
      <div className='boxes'>
        <div className='box'>
          <img src={rabbit} className="pic" />
          <h2 className="name">Rabbit</h2> 
        </div>
        <div className='box'>
          <img src={frog} className="pic" />
          <h2 className="name">Frog</h2> 
        </div>
        <div className='box'>
          <img src={bird} className="pic" />
          <h2 className="name">Rabbit</h2> 
        </div>
      </div>
    </div>
  )
}

export default Tutorials
