import React,{useEffect} from 'react'

import skyVideo from '../../assets/video.mp4'
import plane from '../../assets/plane.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
useEffect(()=>{
  Aos.init({duration: 2000})
},[])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos = 'fade-up' data-aos-duration = '2500'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
        <div className="videoDiv">
          <video src={skyVideo} className='video' loop muted autoPlay></video>
        </div>
        <img src={plane} alt="plane" className ="plane" />
      </div>
    </div>
  )
}

export default Home
