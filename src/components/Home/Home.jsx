import React from 'react'
import './Home.css'
import pic_1 from '../../assets/1.png'
import pic_2 from'../../assets/2.png'


function Home() {
  return (
    <div id='home'>
      <div id="pic1">
        <img src={pic_1} class="ribbon1"/>
      </div>
      <div className='temp'>
      <div className='name'>
        <h1 className='title'><u><span>&emsp;&emsp;&emsp;   </span></u>&nbsp;the</h1>
        <h1 className='title'> origami way</h1>
      </div>
      <div className='description'>
      Origami is an exquisite art that blends simplicity and complexity. With a single sheet of paper, it transforms into breathtaking masterpieces, from delicate flowers to life-size sculptures.
      </div>
      </div>
      <div id="pic1">
        <img src={pic_2} class="ribbon2"/>
      </div>
    </div>
  )
}

export default Home
