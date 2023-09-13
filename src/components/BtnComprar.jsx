import { Link } from "react-router-dom";

const BtnComprar = ({colorPick}) => {
  console.log(colorPick)
    return (
        <div className='cont'>
            <Link
                className='cont_btn'
                to={
                    `https://wa.me/3517713226/?text=Hola! me gusta la capa de color ${colorPick}. Me darias mas info?`
                }
            >
                <p>QUIERO MAS INFO</p>
            </Link>
        </div>
    );
};

export default BtnComprar;
