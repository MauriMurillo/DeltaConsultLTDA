import React from "react";

const ComponentContext = React.createContext();

function ComponentProvider(props) {
  const options = [
    {
      title: "SERVICIOS",
      text: "Conoce los distintos servicios que podemos prestarle a tu empresa. Nuestro compromiso con la excelencia y la adaptabilidad nos permite brindar servicios de auditoría y consultoría altamente especializados en una amplia variedad de industrias en Bolivia.",
      menu: [
        {
          name: "AUDITORIA EXTERNA",
          links: [
            "AUDITORIA FINANCIERA",
            "AUDITORIA OPERATIVA",
            "AUDITORIA FORENSE",
            "AUDITORIA TRIBUTARIA",
          ],
        },
        {
          name: "CONSULTORIAS",
          links: [
            "CONSULTORIA FINANCIERA",
            "CONSULTORIA TRIBUTARIA",
            "CONSULTORIA ESTRATEGICA",
            "CONSULTORIA DE SOSTENIBILIDAD",
          ],
        },
      ],
      links: ["OUTSOURCING DE CONTABILIDAD", "RECURSOS HUMANOS"],
    },
    {
      title: "NOSOTROS",
      text: "Conoce quiénes son las personas detrás de Delta Consult. Descubre nuestro propósito empresarial, nuestra misión y visión. Conoce y contacta a nuestro equipo de profesionales. Revisa la historia de la empresa, un hito histórico a la vez.",
      menu: [],
      links: [
        "PROPOSITO",
        "NUESTRO EQUIPO",
        "NUESTRA HISTORIA",
        "BROCHURE Y DOING BUSINESS",
      ],
    },
    {
      title: "INDUSTRIAS",
      text: "Conoce los distintos rubros y áreas profesionales a las que prestamos nuestros servicios. Sin importar el campo en el que tu empresa se desempeñe, podemos brindarte soluciones a través de auditorías y consultorías. Explora las industrias con las que trabajamos.",
      menu: [],
      links: [
        "GUBERNAMENTALES",
        "INDUSTRIALES Y COMERCIALES",
        "EMPRESAS DE SERVICIOS",
        "FINANCIERAS Y DE SEGUROS",
        "TECNOLOGICAS",
        "ESTRATEGICAS",
        "SIN FINES DE LUCRO",
        "TURISMO Y GASTRONOMIA",
      ],
    },
  ];

  const offices = [
    {
      ciudad: "La Paz",
      direccion: "C. Méndez Arcos #831 - Edif. Delta - Z. Sopocachi",
      telefono: "(+591-2) 2427222",
      mail: "deltaconsult@dcl.com.bo",
      mapLink: "https://goo.gl/maps/5Y46ZDYoUQtQL92x5",
      embed: (
        <iframe
          title="Delta La Paz"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15300.869291984887!2d-68.1305497!3d-16.5151226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20886e3b40bd%3A0x33c60274bab7a6!2sDelta%20Consult%20Ltda.!5e0!3m2!1ses-419!2sbo!4v1691480311681!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      area: "b",
    },
    {
      ciudad: "Santa Cruz",
      direccion: "C. Fermin Peralta #110 - Edif. Delta - Z. EQUIPETROL",
      telefono: "(+591-3) 3454756",
      mail: "deltascz@dcl.com.bo",
      mapLink: "https://goo.gl/maps/ZBkzaSGN7K3RDGkf9",
      embed: (
        <iframe
          title="Delta Santa Cruz"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.6720228623267!2d-63.1968408!3d-17.7600864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7f3fa740101%3A0xa8f15c0904502987!2sDelta%20Consult%20Ltda.!5e0!3m2!1ses-419!2sbo!4v1691480277691!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      area: "c",
    },
    {
      ciudad: "Cochabamba",
      direccion:
        "Calle Los Molles, MZ.035 Edificio Delta PB Nº847 - Zona Cala Cala",
      telefono: "(591)-72044437",
      mail: "deltaconsult@dcl.com.bo",
      mapLink: "https://goo.gl/maps/NUT77m3tGa78EmKr9",
      embed: (
        <iframe
          title="Delta Cochabamba"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9339042687793!2d-66.17080580000001!3d-17.3669132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3753b4acb8d53%3A0xed5f6ce2391c54d8!2sEdificio%20delta%20consult%20ltda!5e0!3m2!1ses-419!2sbo!4v1691480171701!5m2!1ses-419!2sbo"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      area: "d",
    },
  ];

  return (
    <ComponentContext.Provider
      value={{
        offices,
        options,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
}

export { ComponentContext, ComponentProvider };
