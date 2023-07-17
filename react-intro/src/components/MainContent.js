import React from "react";
import "./MainContent.css"

function MainContent() {
    return <div className="mainContent">
        <h1>You'll become the best version of yourself</h1>
        <button>Start to train with me</button>
        <div className="mainContent_blocks">
            <div>
                <h2>Yoga</h2>
                <p>yoga it's practis for your body and mind</p>
            </div>
            <div>
                <h2>Pump</h2>
                <p>Train that make you srong</p>
            </div>
            <div>
                <h2>Athletica</h2>
                <p>Train that make you strong and endurance</p>
            </div>
        </div>
        
    </div>
};

export default MainContent;