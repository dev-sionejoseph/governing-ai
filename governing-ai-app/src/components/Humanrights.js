import React from 'react';
import img2 from '../assets/images/Pros-and-Cons-of-Artificial-Intelligence-1280x720.jpg';
import img1 from '../assets/images/IWD2015Banner_Panama_UNWomen_675x313.jpg';



function Humanrights() {
  return (

    <div className="d1" >
      <h1 className="main_header">  Humanrights for AI </h1>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img className="img1" src={img1} alt='Human rights' />
          </div>
          <div className="flip-box-back">
          <p>
            "No one born from hating another person beacuse of the color of his skin,or his background,or his religion.people must learn to hate,and if they can be taught to love,for love comes more naturally to the human heart than its possible."
            <br></br>
            
            .....Nelson mandela ...
          </p>
        </div>
      </div>

     </div>
    </div>

  )
}



export default Humanrights;

