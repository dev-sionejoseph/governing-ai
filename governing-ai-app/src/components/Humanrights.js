import React from 'react';

import img1 from '../assets/images/IWD2015Banner_Panama_UNWomen_675x313.jpg';
import img2 from '../assets/images/wef.png'
import img3 from '../assets/images/wef-back.png'
import img4 from '../assets/images/FreedomOfExpression.png'
import img5 from '../assets/images/freedomofexpression-back.jpeg'


function Humanrights() {
  return (

    <div className="d1" >
      <h1 className="main_header">  Humanrights for AI </h1>
      <div className="flip-box">
        <div className="flip-box-image">
          <div className="flip-box-front">
            <img className="img1" src={img1} alt='Human rights' />
          </div>
          <div className="flip-box-back">
          <p className="p_un">
            UN: "All humans being or born free & equal in dignity and rights
            "
            <br></br>
            
            .....Article 1 of the Universal declaration of Humanrights ...
          </p>
        </div>
      </div>

     </div>
     <div className="flip-box">
        <div className="flip-box-image">
          <div className="flip-box-front">
          <img className="img2" src={img2} alt='Human rights' />
          </div>
          <div className="flip-box-back">
                      <img className="img3" src={img3} alt='Human rights' />

        </div>
      </div>

     </div>
     <div className="flip-box">
        <div className="flip-box-image">
          <div className="flip-box-front">
          <img className="img4" src={img4} alt='Human rights' />
          </div>
          <div className="flip-box-back">
                      <img className="img5" src={img5} alt='Human rights' />

        </div>
      </div>

     </div>
    </div>

  )
}



export default Humanrights;

