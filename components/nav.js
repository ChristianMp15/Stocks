import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>This is the Home Page</div>
            </Link>
            <Link to='/stocks/:symbol'>
                <div>STOCK</div>
            </Link>
            <Link to='/stocks'>
                <div>STOCKS</div>
            </Link>
        </div>
    );
}

export default Nav;