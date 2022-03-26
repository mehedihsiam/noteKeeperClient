import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav>
            <div className="container mx-auto">
                <Link to='/login'>
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Header;