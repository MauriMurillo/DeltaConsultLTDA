import React from "react";
import { Header } from "../../components/Header/Header.js";
import { Footer } from "../../components/Footer/Footer.js";
import smsLogo from "../../Assets/Logos/SMSLogo.png";
import deltaLogo from "../../Assets/Logos/ISOLOGO DELTA AZUL.png";
import forodefirmasLogo from "../../Assets/Logos/ForodeFirmas.png";
import sms1 from "../../Assets/smslatam/mapsms.png";
import sms2 from "../../Assets/smslatam/worldsms.png"
import "./SMS.css";

function SMS() {
  return (
    <div className="smsScreen Screen">
      <Header />
      <div className="smsSection">
        <div className="textContainer">
          <h1 className="Title">Red SMS</h1>
          <div className="Text">Acerca de SMS Latinoamerica</div>
        </div>
        <div className="pane1">
          <div className="textPane">
            <div className="TextSMS">
              <span>
                <img alt="logo SMS" src={smsLogo} />
              </span>
              Somos una organización integrada por Firmas profesionales
              independientes de Auditoría, Consultoría, Contabilidad y
              asesoramiento Fiscal para empresas, que comparten tecnología de
              avanzada para prestar los mejores servicios profesionales a
              nuestros clientes.Al estar integrada por Firmas nacionales
              independientes de alta experiencia profesional, somos la única
              organización ebn el continente que acredita valores
              latinoamericanos para servir a todas las empresas del mundo que
              radiquen sus operaciones en los paises de la región y facilitar a
              las empresas latinoamericanas en su inserción internacional.A
              través de nuestra red de Firmas hemos logrado generar una sólida
              presencia en toda América Latina y el Caribe, cubriendo las
              necesidades y expectativas de nuestros clientes.
            </div>
            <a
              className="smsLink"
              href="https://smslatam.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p> VISITA SMS LATINOAMERICA AQUI</p>
            </a>
          </div>
          <img alt="whereSMS" src={sms1} />
        </div>
      </div>
      <div className="pane2">
        <h2>Un Jugador Activo en la Región</h2>
        <div className="TextDelta">
          <span>
            <img alt="logo Delta" src={deltaLogo} />
          </span>
          Somos SMS Latinoamérica, una organización integrada por Firmas
          profesionales independientes de Auditoría, Consultoría, Contabilidad y
          asesoramiento Fiscal para empresas, que comparten tecnología de
          avanzada para prestar los mejores servicios profesionales a nuestros
          clientes.Al estar integrada por Firmas nacionales independientes de
          alta experiencia profesional, somos la única organización ebn el
          continente que acredita valores latinoamericanos para servir a todas
          las empresas del mundo que radiquen sus operaciones en los paises de
          la región y facilitar a las empresas latinoamericanas en su inserción
          internacional.A través de nuestra red de Firmas hemos logrado generar
          una sólida presencia en toda América Latina y el Caribe, cubriendo las
          necesidades y expectativas de nuestros clientes.
        </div>
      </div>

      <div className="ifacSection Bottom">
        <div className="textContainer">
          <h2 className="Title">Foro de Firmas</h2>
          <div className="Text">El mas grande de Latinoamerica</div>
        </div>
        <div className="pane1">
          <img alt="ifacWorld" src={sms2} />
          <div className="textPane">
            <div className="TextSMS">
              <span>
                <img alt="logo forum" src={forodefirmasLogo} />
              </span>
              Desde SMS Latinoamérica cubrimos con servicios profesionales las
              necesidades de nuestros clientes en todo el continente.
              Privilegiamos los conocimientos y las experiencias nacionales para
              resolver las problemáticas y las complejidades de las compañías
              que operan en la región, sea cual fuere su origen Basamos nuestro
              éxito en el conocimiento específico de cada país, su entrono y sus
              empresas, para poder dar siempre la respuesta adecuada a cada
              situación. Y esto se logra únicamente perteneciendo y siendo parte
              activa de la región.
              <p>
                Somos la organización global para la profesión contable,
                compuesta por 180 organizaciones miembros y asociadas en 135
                jurisdicciones, que representan a millones de contadores
                profesionales.
              </p>
            </div>
            <a
              className="ifacLink"
              href="https://www.ifac.org/"
              target="_blank"
              rel="noreferrer"
            >
              <p>VISITA FORUM OF FIRMS AQUI</p>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export { SMS };
