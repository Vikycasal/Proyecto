import React from 'react';
import Cvespañol from "../Import/Cvespañol.pdf";
import Cvenglish from "../Import/Cvenglish.pdf";

const Botones = () => {
  return (
    <div className='Botones'>
    <a href={Cvespañol} download className='btn' >Download CV Español</a>
    <a href={Cvenglish} download className='btn'>Download CV English</a>
    </div>
  )
}

export default Botones