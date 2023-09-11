import { Link } from "react-router-dom";

const BtnComprar = () => {
    return (
        <Link className="cont_btn" to={"https://wa.me/3517713226/?text=QUIERO TENER MÁS INFORMACION SOBRE LA CAPA"}>
          <p>QUIERO MAS INFO</p>
        </Link>
    );
};

export default BtnComprar;
