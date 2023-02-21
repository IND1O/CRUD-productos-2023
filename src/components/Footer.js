import React from "react";
import Logo from "../assets/imagen/logoJMA.png";

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <div className="col l6 s12">
            <h5>DESING BY :</h5>
            <h6>
              <i className="bi bi-code-square"></i>
              {"  "}José María Asial Diaz
            </h6>

            <h6>
              <i className="bi bi-whatsapp"></i> +54 9 381 580-7972
            </h6>
            <h6>
              <i className="bi bi-linkedin"></i> José María Asial Diaz
            </h6>

            <h6>
              <i className="bi bi-envelope"></i> joseasial@alu.frt.unt.edu.ar
            </h6>
            <img
              className="rounded-circle align-item-center"
              src={Logo}
              alt="dev"
              style={{ width: 180, height: 180 }}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-center ">
          <strong>Todos los derechos reservados © {fecha} Copyright</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
