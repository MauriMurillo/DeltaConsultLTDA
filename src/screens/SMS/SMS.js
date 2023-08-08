import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import smsLogo from "../../Assets/Images/Logos/SMSLogo.png";
import sms1 from "../../Assets/Images/smsImages/smsCountry.png";
import sms2 from "../../Assets/Images/smsImages/smsInBolivia.png";
import "./SMS.css";

function SMS() {
  return (
    <div className="smsScreen">
      <Header />
      <div className="smsSection" style={{ marginTop: "150px" }}>
        <div className="textContainer">
          <div className="Title">RED SMS</div>
          <div className="Text">Acerca de SMS latinoamerica</div>
        </div>
        <div className="smsDivider">
          <img alt="SMS logo" src={smsLogo} />
          <a href="smslatam.com" target="_blank" rel="noreferer">
            smslatam.com
          </a>
        </div>
        <div className="content">
          <img alt="whereSMS" src={sms1} />
          <div className="Text tsms">
            Somos SMS Latinoamérica, una organización integrada por Firmas
            profesionales independientes de Auditoría, Consultoría, Contabilidad
            y asesoramiento Fiscal para empresas, que comparten tecnología de
            avanzada para prestar los mejores servicios profesionales a nuestros
            clientes.Al estar integrada por Firmas nacionales independientes de
            alta experiencia profesional, somos la única organización ebn el
            continente que acredita valores latinoamericanos para servir a todas
            las empresas del mundo que radiquen sus operaciones en los paises de
            la región y facilitar a las empresas latinoamericanas en su
            inserción internacional.A través de nuestra red de Firmas hemos
            logrado generar una sólida presencia en toda América Latina y el
            Caribe, cubriendo las necesidades y expectativas de nuestros
            clientes.
          </div>
        </div>
        <div className="textContainer">
          <div className="Title">UN JUGADOR ACTIVO EN LA REGION</div>
          <div className="Text">Acerca de SMS latinoamerica</div>
        </div>
        <div className="smsDivider">
          <img alt="SMS logo" src={smsLogo} />
          <a href="smslatam.com" target="_blank" rel="noreferer">
            smslatam.com
          </a>
        </div>
        <div className="content">
          <img alt="SMS en Bolivia" src={sms2} />
          <div className="Text tsms">
            Desde SMS Latinoamérica cubrimos con servicios profesionales las
            necesidades de nuestros clientes en todo el continente.
            Privilegiamos los conocimientos y las experiencias nacionales para
            resolver las problemáticas y las complejidades de las compañías que
            operan en la región, sea cual fuere su origenBasamos nuestro éxito
            en el conocimiento específico de cada país, su entrono y sus
            empresas, para poder dar siempre la respuesta adecuada a cada
            situación.Y esto se logra únicamente perteneciendo y siendo parte
            activa de la región
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { SMS };
