import React, { Component } from 'react';
import './Stakeholder.css';

import Zoom from 'react-medium-image-zoom'

let card={};
export default class StackholderCard extends Component{

    constructor(props) {
        super(props);
        this.state = {

            mouseOnCard: false

        }
    }

    handleMouseIn = (event) => {

        this.setState( { mouseOnCard: true });

        //display summary
        this.props.displaySummary(card.summary, this.props.summaryId);

    }

    handleMouseOut = (event) => {

        this.setState( { mouseOnCard: false });

    }

    render() {

        card=JSON.parse(this.props.card);

        return (
            <div>
                <div className="img-container">

                    { (this.state.mouseOnCard) ? 
                    ( <Zoom>
                            <img className="stakeholder-img" 
                                src={card.image} 
                                onMouseLeave={this.handleMouseOut}
                                width="330px" height="330px" />
                        </Zoom> )
                    :
                    ( <img className="stakeholder-img" src={card.image} onMouseEnter={this.handleMouseIn}  width="300px" height="300px"
                    /> )
                    }

                </div>
                <p className="stakeholder-desc">{card.desc}</p>
    
            </div>
        )
    }


    resetSiblingStyling = (node) => { 
    
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
}
