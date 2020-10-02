import React from "react";

import "./Footer.css"

export class Footer extends React.Component{
    
    render(){
        return (
            <div className="footer">
                <div> Developed in React by <a href="https://github.com/luluvannary">Lulu</a></div>
                <div>Credits: <a href="https://codepen.io/joshbader/pen/EjXgqr">J. Bader's CSS animations</a> based on <a href="https://dribbble.com/shots/2097042-Widget-Weather">Kylor's widgets</a></div>

            </div>
        )
    }

}