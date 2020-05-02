import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footerParent">
                <div className="footerInner">
                    <div className="footerInInner">
                        <h2>For updates on Artificial Intelligence and Human Rights </h2>
                        <p className= "signBelow">Sign up using your email below!</p>
                    </div>
                    <div className="submissions">
                        <input className = "footerInput" type="text" placeholder="Email"></input>
                        <button className = "footerButton" type="submit">submit</button>
                    </div>
                </div>
            </div>
        )
    }
}