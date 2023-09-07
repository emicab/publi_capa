

const Menu = ({setColorBtn}) => {
    return (
        <div className='menu'>
            <div className='contenedor_colores'>
                <button className='colores color1'
                    onClick={() => setColorBtn('#cb1a1a')}
                ></button>
                <button className='colores color2'
                    onClick={() => setColorBtn('#000000')}
                ></button>
                <button className='colores color3'
                    onClick={() => setColorBtn('#102c68')}
                ></button>
                <button className='colores color4'
                    onClick={() => setColorBtn('#ea45dd')}
                ></button>
            </div>
        </div>
    );
};

export default Menu;
