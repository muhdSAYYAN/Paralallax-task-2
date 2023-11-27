import React, { useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './paralallax.css'

import save from './Assets/save.jpg'
import earth from './Assets/earth.jpg'
import dont from './Assets/dont.jpg'
import fire from './Assets/fire.jpg'
import solution from './Assets/solution.jpg'
import next from './Assets/next.png'
import previous from './Assets/previous.png'


// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Paralallax() {
    const parallax = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNext = () => {
      if (currentPage < 2) {
        setCurrentPage(currentPage + 1);
        parallax.current.scrollTo(currentPage + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        parallax.current.scrollTo(currentPage - 1);
      }
    };

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
    <Parallax ref={parallax} pages={3} horizontal>
      <ParallaxLayer offset={0} speed={0} style={{ width:"100%",objectFit:"contain", backgroundSize: 'cover' }} />
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'lightblue' }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />


        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            width: '300%', // Adjust the width based on the number of slides/pages
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />


        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="Satellite" /> */}
          
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="Cloud" />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="Cloud" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} alt="Earth" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            // backgroundImage: url('clients', true),
          }}
        >
          {/* <img src={fire} style={{ width: '30%', borderRadius:"100%"}} alt="Server" /> */}
          </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={save} style={{ width: '30%', borderRadius:"100%"}} alt="Server" />
         <div className='save'>
         <p style={{fontSize:"28px",paddingLeft:"10px",fontFamily:"cursive"}}>"Reduce, Reuse, Recycle: The Earth’s Lifecyle."</p>
         <nav>
  <ul>
    <li>
      home
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      services
      <span></span><span></span><span></span><span></span>
    </li>
    <li>
      contact
      <span></span><span></span><span></span><span></span>
    </li>
  </ul>
</nav>
     
         </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            flexDirection:"column",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={dont} style={{ width: '40%',borderRadius:"360px" }} alt="Bash" />
          <nav>
  <ul>
    <li className="find-solution">
      Find Solutions
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            flexDirection:"column",
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={solution} style={{ width: '40%',borderRadius:"360px" }} alt="Clients Main" />
          <nav>
  <ul>
    <li className="find-solution">
      Find Solutions
      <span></span><span></span><span></span><span></span>
    </li>
    </ul>
    </nav>
        </ParallaxLayer>
      </Parallax>

      <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <img src={previous} onClick={handlePrev} style={{width:"50px",height:"50px", marginLeft: '20px' }}/>
         
        <img src={next} onClick={handleNext} style={{width:"50px",height:"50px", marginRight: '20px' }}/>
          
      </div>
    </div>
  );
}


