import React from 'react';
import "./Services.css"

function Services() {
  return (
    <div id='services sections' className='services'>
      <h1 className='text-center font-bold text-2xl'>Services</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse!</p>
      <div className="service-rows">
        <div className="rows">
          <div className="icon">
            <i class="fa-solid fa-globe"></i>
          </div>
          <h1 className='font-bold text-2xl text-center'>Web Devloper</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit, quo obcaecati nam consequuntur maiores.</p>
        </div>
        <div className="rows">
          <div className="icon">
            <i class="fa-solid fa-gamepad"></i>
          </div>
          <h1 className='font-bold text-2xl text-center'>Game Devloper</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit, quo obcaecati nam consequuntur maiores.</p>
        </div>
        <div className="rows">
          <div className="icon">
            <i class="fa-solid fa-desktop"></i>
          </div>
          <h1 className='font-bold text-2xl text-center'>App Developer</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit, quo obcaecati nam consequuntur maiores.</p>
        </div>
      </div>
    </div>
  )
}

export default Services