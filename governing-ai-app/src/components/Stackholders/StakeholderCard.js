import React from 'react';
import './Stakeholder.css';

export default  function StackholderCard (props) {

    let card=JSON.parse(props.card);

    const resetSiblingStyling = (node) => { 
        
        let sibling=node.parentNode.firstChild;
        while (sibling) {
            if (sibling===node) { //It's itself, not sibling
                sibling=sibling.nextElementSibling;
                continue;  
            }

            node.style.padding ="0";

            sibling=sibling.nextElementSibling;
        }
    }

    const handleHover = (event) => {
        //display summary
        props.displaySummary(card.summary, props.summaryId);
    }

    return (
        <div>

            <img className="stakeholder-img" src={card.image} onMouseEnter={handleHover} />
            <p className="stakeholder-desc">{card.desc}</p>

        </div>
    )
}
