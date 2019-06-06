import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/" id="logo"><h3>Clicky Game</h3></a>
        <h5 className="ml-auto mt-2" id="counters">Score: {props.score} | Top score: {props.top} </h5>
    </nav>
)

export default Navbar;