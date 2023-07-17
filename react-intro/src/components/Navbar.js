import React from "react";
import "./Navbar.css"

const styles = {}

function Navbar() {
    let hour = 18

    if (hour >= 0 && hour < 6) {
        styles.backgroundColor = 'blue'
    } if (hour >= 6 && hour < 12) {
        styles.backgroundColor = 'aliceblue'
    } if (hour >= 12 && hour < 18) {
        styles.backgroundColor = 'antiquewhite'
    } if (hour >= 18 && hour < 24) {
        styles.backgroundColor = 'bisque'
    }
    

    return <div className="navbar" style={styles}>
        <h1>Daniil Bar Yoga&Fitness</h1>
        <ul className="navbar_ul">
            <li>about me</li>
            <li>programs for each days</li>
            <li>how to start practice yoga</li>
        </ul>
    </div>
};

export default Navbar;