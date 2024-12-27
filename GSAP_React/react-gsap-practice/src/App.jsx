import React from 'react'
import './App.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

gsap.registerPlugin(useGSAP);


const App = () => {

  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.box', {
        x: 1000,
        duration: 3,
        rotateX: 360,
        rotateY: 360,
        rotateZ: 360,
        
      }); // <-- automatically reverted
      gsap.to('.circle', {
        x:1000,
        y:50,
        duration:5,
        rotateY: 700,
        rotateZ: 700,
        scale: 2
      })
    });

  return (
    <div>
      <div className="box">BOX</div>
      <div className="circle">CIRCLE</div>

    </div>
  )
}

export default App