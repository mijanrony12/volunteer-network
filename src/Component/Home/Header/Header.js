import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <div className="header">
            <div className="logo">
                    <h3> <small>Khalil <span>HB</span></small> <br /> Foundation</h3>
            </div>
            <div className="menu-bar">
                    <Link to="/home">Home</Link>
                    <Link to="/work">Our work</Link>
                    <Link to="/volunteer">Volunteer</Link>
                <Link to="/home">Membership</Link>
                {user.displayName}
                { user.email ?
                    <Link to="/login">Log Out</Link>
                    :
                    <Link to="/login">Sign In</Link>
                }
                    <Link to="/register">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;