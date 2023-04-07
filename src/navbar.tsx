import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-left">
                <Link to="/fintroduction">Home</Link>
            </div>
            <div className="nav-right">
                <button>About Us</button>
            </div>
        </nav>
    );
};

export default Navbar;
