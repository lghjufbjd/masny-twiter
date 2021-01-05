import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';

const Nav = props => {
    function make_new_post(){
        
    }
    return (
        <nav>
            <div className="nav-button">
                <div className="nav-icon "></div>
            </div>
            <div className="nav-button" onClick={make_new_post()}>
                <div className="nav-icon "></div>
                </div>
            <div className="nav-button">
                <div className="nav-icon "></div>
                </div>
            <div className="nav-button">
                <div className="nav-icon "></div>
                </div>
            <div className="nav-button"></div>
            <div className="nav-button">
                <div className="nav-icon "></div>
                </div>
        </nav>
    );
};
  


Nav.propTypes = {
    
};

export default Nav;