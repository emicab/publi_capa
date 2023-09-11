import React from "react";

const Nav = ({ load }) => {
    return (
        <nav style={{opacity: load ? 1 : 0}}>
            <div className='logo'>
                <img src='./logo.png' alt='' className="logo_nav" />
            </div>
             <h2>Capa impermeble</h2>
        </nav>
    );
};

export default Nav;
