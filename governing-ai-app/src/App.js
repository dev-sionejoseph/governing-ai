import React from 'react';
import './App.css';

import ScrollIntoView from 'react-scroll-into-view';

import connectedLines from './assets/3d-connected-dots.png';
import map1 from './assets/map1-face.png';
import map2 from './assets/map2-camera.png';
import map3 from './assets/map3-robot.jpg';
import map4 from './assets/map4-human-machine.png';
import map5 from './assets/map5-privacy.png'
import map6 from './assets/map6-trump.png';
import map7 from './assets/map7-facebook.png';
import map8 from './assets/map8-human-car.png';

import Stakeholders from './components/Stackholders/Stakeholders';

function App() {

  let stakeHolders = JSON.stringify(Stakeholders);

  return (
    <div className="App">

      <div className="nav-map">
        <ScrollIntoView selector="#stakeholder-selector">
          <input type="image" id="nav-img1"  src={map1} />
        </ScrollIntoView>
          <input type="image" id="nav-img2"  src={map2} />
          <input type="image" id="nav-img3"  src={map3} />
          <input type="image" id="nav-img4"  src={map4} />
          <input type="image" id="nav-img5"  src={map5} />
          <input type="image" id="nav-img6"  src={map6} />
          <input type="image" id="nav-img7"  src={map7} />
          <input type="image" id="nav-img8"  src={map8} />
        <img className="menu-background"  src={connectedLines} />
      </div>


      <div id="stakeholder-selector">
        <br /><br /><br /><br /><br />
      </div>


      <Stakeholders stakeHolders={stakeHolders} />
    </div>
  );
}

export default App;
