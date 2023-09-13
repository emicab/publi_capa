import React from "react";

const Nav = ({ load }) => {
    return (
        <nav style={{opacity: load ? 1 : 0}}>
            <div className='logo'>
                <img src='./ignite_logo.svg' alt='logo ignite' className="logo_nav" />
            </div>
             <h2>Capa impermeable rompeviento</h2>
        </nav>
    );
};

export default Nav;
