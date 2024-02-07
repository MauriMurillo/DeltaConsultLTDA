import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import smsLogo from "../../Assets/Logos/SMSLogo.png";
import isoSMS from "../../Assets/Logos/istotipoSMS.png";
import deltaLogo from "../../Assets/Logos/ISOLOGO DELTA AZUL.png";
import ifacLogo from "../../Assets/Logos/IFAC.png";
import forodefirmasLogo from "../../Assets/Logos/ForodeFirmas.png";
import sms1 from "../../Assets/default.png";
import sms2 from "../../Assets/default.png";
import smsLink from "../../Assets/default.png";
import "./SMS.css";

function SMS() {
  return (
    <div className="smsScreen Screen">
      <Header />
      <div className="smsSection" style={{ marginTop: "170px" }}>
        <div className="textContainer">
          <div className="Title" style={{ color: "#A21F4A" }}>
            RED SMS
          </div>
          <div className="Text">Acerca de SMS latinoamerica</div>
        </div>
        <img className="smsLogoMain" alt="SMS logo" src={smsLogo} />
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
          <a
            className="smsLink"
            href="https://smslatam.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="background">
              <p> Haz Click para visitar SMS</p>
            </div>
            <img alt="smsLink" src={smsLink} />
          </a>
        </div>
        <div className="textContainer">
          <div className="Title" style={{ color: "#A21F4A" }}>
            UN JUGADOR ACTIVO EN LA REGION
          </div>
          <div className="Text">Acerca de SMS latinoamerica</div>
        </div>
        <div className="smsDivider">
          <img className="isoSMS" alt="SMS logo" src={isoSMS} />
          <img className="Delta" alt="Delta Logo" src={deltaLogo} />
        </div>
        <div className="content2">
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
          <img alt="SMS en Bolivia" src={sms2} />
        </div>
      </div>
      <div className="ifacSection">
        <img
          className="foroLogoMain"
          alt="Foro de Firmas"
          src={forodefirmasLogo}
        />

        <div className="content">
          <p className="Text tifac">
            El Foro de Firmas es una asociación independiente de redes
            internacionales de firmas que realizan auditorías transnacionales.
            El objetivo del Foro es promover estándares consistentes y de alta
            calidad de informes financieros y prácticas de auditoría en todo el
            mundo, reuniendo a firmas que realizan auditorías transnacionales e
            involucrándolas más estrechamente con las actividades de IFAC en
            auditoría y otras áreas relacionadas con el aseguramiento. Los
            miembros del Foro deben demostrar su compromiso de adherirse y
            promover la aplicación consistente de prácticas de auditoría de alta
            calidad en todo el mundo, como se detalla en la Constitución, los
            procedimientos operativos y los arreglos de gobierno del Foro.
          </p>
          <p className="Text tifac">
            Somos la organización global para la profesión contable, compuesta
            por 180 organizaciones miembros y asociadas en 135 jurisdicciones,
            que representan a millones de contadores profesionales.
          </p>
        </div>
        <a
          className="ifacLink"
          href="https://www.ifac.org/who-we-are/transnational-auditors-committee-forum-firms"
          target="_blank"
          rel="noreferrer"
        >
          <p>Haz Click para visitar</p>
          <img alt="ifac logo" src={ifacLogo} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export { SMS };
