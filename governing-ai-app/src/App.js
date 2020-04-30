import React from 'react';
import './App.css';

import ScrollIntoView from 'react-scroll-into-view';

import MSimg from './assets/Micriosoft-HRIA-circle.png';
import trumpImg from './assets/trump-facebook-circle.png';
import ggimg from './assets/Google-Maven-circle.png';
import forthImg from './assets/Fourth-Industrial-Revolution-circle.png';

import Stakeholders from './components/Stackholders/Stakeholders'

function App() {

  let stakeHolders = JSON.stringify(Stakeholders);

  return (
    <div className="App">

      <ScrollIntoView selector="#stakeholder-selector">
        <button >
          Jump to Stakeholders
        </button>
      </ScrollIntoView>

  {/* <img src={MSimg}  />
  <img src={trumpImg}  />
  <img src={ggimg}  />
  <img src={forthImg}  /> */}

      <div id="stakeholder-selector">
        <br /><br /><br /><br /><br />
      </div>


      <Stakeholders stakeHolders={stakeHolders} />
    </div>
  );
}

export default App;
