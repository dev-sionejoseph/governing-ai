import React from 'react';
import './Stakeholder.css';

import StakeholderCard from './StakeholderCard';
import businessStakeholders, {civilStakeholders} from './StakeholdersList';

const displaySummary = (summary, summaryId) => {
    let elem = document.getElementById(summaryId);
    elem !== null && (elem.innerHTML = summary);
} 

const displayStakeholdList = (businessStakeholders, summaryId) => {
    return (
        businessStakeholders.map( (c, id) => { 
            c=JSON.stringify(c); 
            return ( <div > 
                <StakeholderCard card={c}
                                summaryId={summaryId}
                                displaySummary={displaySummary}
                                /> 
                </div> )
        } )
    )
}

function Stakeholders() {

    let buzSummaryId = "business-card-summary";
    let civilSummaryId = "civil-card-summary";


    return (
        <div>
            <h3 style={{color:'green'}}>WHILE AI “ETHICS” IS THE TOPIC DU JOUR FOR THE TECH INDUSTRY, HUMAN RIGHTS IS BEGINNING TO EMERGE AS AN ADDITIONAL PERSPECTIVE
</h3><br />

            <div className="business-container">

                {displayStakeholdList(businessStakeholders, buzSummaryId)}

                <p id={buzSummaryId}></p>

            </div>



            <h3 style={{color:'green'}}>WHILE SOME MAJOR INTERNATIONAL HUMAN RIGHTS ORGANIZATIONS ARE STARTING TO FOCUS ON AI,
ADDITIONAL ATTENTION IS NEEDED FROM CIVIL SOCIETY ON POTENTIAL RISKS AND HARMS</h3><br />

            <div className="civil-container">

                {displayStakeholdList(civilStakeholders, civilSummaryId)}

                <p id={civilSummaryId}></p>

            </div>


        </div>
    )
}

export default Stakeholders;