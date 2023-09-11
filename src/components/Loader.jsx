import React from "react";

const Loader = ({load}) => {
    return (
        <div className='loader' style={{display: load ? "none" : "flex"}}>
            <img src='./logo.png' alt='' className="logo_loader" />
            <p className="text_loader">Cargando, por favor espere...</p>
        </div>
    );
};

export default Loader;
