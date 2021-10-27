import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                    <h3> <small>Khalil <span>HB</span></small> <br /> Foundation</h3>
            </div>
            <div className="menu-bar">
                    <Link to="/home">Home</Link>
                    <Link to="/home">Our work</Link>
                    <Link to="/home">Volunteer</Link>
                    <Link to="/home">Membership</Link>
                    <Link to="/register">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;