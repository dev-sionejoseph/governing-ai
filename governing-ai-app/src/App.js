import React from 'react';
import Footer from './Components/Footer';
import Slide from './Components/Slide';
import './App.css';
import Introduction from './components/Introduction';
import BridgingRights from './components/BridgingRights';
import ScrollIntoView from 'react-scroll-into-view';
import brainCloud from './assets/brain-cloud.gif'
import map1 from './assets/map1-face.png';
import map2 from './assets/map2-camera.png';
import map3 from './assets/map3-robot.jpg';
import map4 from './assets/map4-human-machine.png';
import map5 from './assets/map5-privacy.png'
import map6 from './assets/map6-trump.png';
import map7 from './assets/map7-facebook.png';
import map8 from './assets/map8-human-car.png';
import upArrow from './assets/up-arrow.png';
import Stakeholders from './components/Stackholders/Stakeholders';

function App() {

  let stakeHolders = JSON.stringify(Stakeholders);

  return (
    <div className= "wrapper">
      <div>
      <Slide />
      </div>
      <Footer />
    <div className="App">
      <div id="nav-map">
        <img className="menu-background"  src={brainCloud} />

          <div id="nav-img1-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img1"  src={map1} />
            </ScrollIntoView>
            <p className="nav-label">Label 1</p>
          </div>

          <div id="nav-img2-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img2"  src={map2} />
            </ScrollIntoView>
            <p className="nav-label">Label 2</p>
          </div>
          
          <div id="nav-img3-box">
            <ScrollIntoView selector="#stakeholder-selector">
             <input type="image" id="nav-img3"  src={map3} />
            </ScrollIntoView>
            <p className="nav-label">Label 3</p>
          </div>

          <div id="nav-img4-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img4"  src={map4} />
            </ScrollIntoView>
            <p className="nav-label">Label 4</p>
          </div>

          <div id="nav-img5-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img5"  src={map5} />
            </ScrollIntoView>
            <p className="nav-label">Label 5</p>
          </div>

          <div id="nav-img6-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img6"  src={map6} />
            </ScrollIntoView>
            <p className="nav-label">Stakeholders</p>
          </div>

          <div id="nav-img7-box">
            <ScrollIntoView selector="#stakeholder-selector">
             <input type="image" id="nav-img7"  src={map7} />
            </ScrollIntoView>
            <p className="nav-label">Label 7</p>
          </div>

          <div id="nav-img8-box">
            <ScrollIntoView selector="#stakeholder-selector">
              <input type="image" id="nav-img8"  src={map8} />
            </ScrollIntoView>
            <p className="nav-label">Label 5</p>
          </div>

        <div className="article-summary-box">
          <p className="article-summary">In order for AI to benefit the common good, at the very least its design and deployment should avoid harms to fundamental human values. International human rights provide a robust and global formulation of those values.</p>
        </div>

        <ScrollIntoView selector="#nav-map">
          <img id="back-to-map-icon" src={upArrow} /> 
        </ScrollIntoView>

      </div>


      <div id="stakeholder-selector"></div>
      <Stakeholders stakeHolders={stakeHolders} />
    </div>
      <Introduction />
      <BridgingRights />
    </div>
  );
}

export default App;
