import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-left">
                <Link to="/fintroduction">Home</Link>
            </div>
            <div className="nav-right">
                <Link to="/fintroduction/about">About Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
