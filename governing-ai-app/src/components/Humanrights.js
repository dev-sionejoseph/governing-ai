import React from 'react';
import img2 from '../images/Pros-and-Cons-of-Artificial-Intelligence-1280x720.jpg';
import img1 from '../images/5-Dangers-of-Artificial-Intelligence-in-the-Future.png';



function Humanrights ()
{
    return(

        <div className="d1"> 
        <div className="d2">
    {/*<button className="b1"> Find a near by store</button>*/}
<img className="i1" src = {img1} alt='Human rights'/>
        </div>
        <div className="d3">
        <img className="i2" src = {img2} alt='Human rights'/>  
        </div>

        </div>

    )
}



export default Humanrights;

