import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Clicky Game</b></h1>
        <br/>
        <h5 className="subtitle">How to play:</h5>
        <br/>
        <h5 className="subtitle">Click on an image to get started! After each click, the images will shuffle. <br/> The goal is to select each image once!</h5>
    </div>
)

export default Header;