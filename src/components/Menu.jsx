import { memo } from "react";

const Menu = memo(({ setColorBtn }) => {
    const colores = {
        rojo: "#CB1A1A",
        negro: "#000000",
        azul: "#1946a8",
        rosa: "#EA45DD",
        blanco: "#FFF",
        verde: "#1daa1d",
    };

    const createBtn = (color) => {
        return (
            <div className='btn_color' key={color}>
                <button
                    className='color'
                    style={{ backgroundColor: colores[color] }}
                    onClick={() => setColorBtn(colores[color])}
                ></button>
            </div>
        );
    };

    return (
        <>
            <div className='menu'>
                <h3>Colores Disponibles:</h3>
                <div className='contenedor_colores'>
                    {Object.keys(colores).map((color) => createBtn(color))}
                </div>
                <p>Tocá para cambiar de color !</p>
            </div>
        </>
    );
});

export default Menu;
