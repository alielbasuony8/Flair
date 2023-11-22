import React from 'react'

import skyVideo from '../../assets/video.mp4'
import plane from '../../assets/plane.png'

const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={skyVideo} className='video' loop muted autoPlay></video>
        </div>
        <img src={plane} alt="plane" className ="plane" />
      </div>
    </div>
  )
}

export default Home
