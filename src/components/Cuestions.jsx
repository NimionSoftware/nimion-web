import { useState } from "react";
const Arrow = "../images/arrow.png";

const Cuestions = () => {
    const faqs = [
        {
            Qtn: ' ¿Mi negocio va a aparecer en Google?',
            answ: 'Junto con el sitio web incluimos SEO GRATIS ¿a qué nos referimos con esto? Vas a tener una base de SEO básico para poder aparecer bien posicionado con tu sitio sin pagar un extra. Si quisieras mejorar este posicionamiento contamos con un servicio dedicado a optimizar tu sitio web para que las velocidades de carga sean ideales y los motores de busqueda no tengan problemas para rastrearla. Nuestro objetivo es que tu plataforma tenga un rendimiento óptimo en términos de velocidad de carga, accesibilidad y visibilidad.'
        },
        {
            Qtn: '¿Tengo que pagar un costo mensual por mi sitio web?',
            answ: 'No, no manejamos ningún costo mensual obligatorio para el servicio de sitio web, una vez realizado el sitio no tiene costos extras. Si es de tu interes puedes contratar el servicio de mantenimiento mensual para optimizar la funcionalidades y mantener actualizada tu web.'
        },
        {
            Qtn: '¿Quién hace los diseños de mi pagina Web?',
            answ: 'Contamos con un equipo de profesionales altamente capacitados en la creación de páginas web de alta calidad. Nuestros diseñadores web se dedican a construir sitios que combinan a la perfección estética y funcionalidad. Utilizamos las últimas tendencias y tecnologías en diseño web para garantizar que tu página tenga un aspecto moderno y atractivo. Recibiras el sitio una vez terminado y funcionando.'
        },
        {
            Qtn: '¿Mi página Web tambien sirve para celulares o tablets?',
            answ: 'Sí! Todos nuestros diseños de sitios Web son responsivos, es decir, son accesibles desde cualquier dispositivo con conexion a internet.'
        },
        {
            Qtn: '¿Cúanto es el tiempo que lleva realizar la página web?',
            answ: 'Hay muchos factores que influyen en el avance del proyecto, uno de ellos es que contemos con toda la información sobre los puntos de dolor que se desean curbir por parte del cliente para un avance sostenido. Se suma a esto el tiempo que lleva realizar los ajustes que se quieran implementar luego de finalizado el sitio. Actualmente manejamos tiempos de aproximadamente dos a cuatro semanas laborales para realizar el diseño web.'
        },
    ]

    const [indexes, setIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (indexes === index) {
            setIndex(null);
        } else {
            setIndex(index);
        }
    };

    return (
      <>
        {faqs.map((faq, index) => (
          <div key={index} tabIndex={1} className="flex flex-col justify-center items-center border-t border-b border-secondary-light w-[70%] min-h-[4rem] cursor-pointer" onClick={() => toggleQuestion(index)}>
            <p className="flex justify-center md:justify-between text-center md:text-start text-xs lg:text-sm font-semibold w-[95%] mt-4 mb-4">{faq.Qtn}<span className="hidden md:block"><img src={Arrow} alt="Icon arrow" className={indexes === index ? "transition duration-500 rotate-0 w-4 h-4" : "transition duration-500 rotate-180 w-4 h-4"} /></span></p>
            <div className={indexes === index ? "max-w-[85%] lg:h-[7rem] mb-10 lg:mb-0 mt-6 md:mr-16 transition-all duration-500 overflow-hidden" : "max-w-[85%] mt-3 md:mr-16 h-0 transition-all duration-500 overflow-hidden"}>
              <p className=" text-center md:text-start text-xs md:text-sm font-normal m-auto">{faq.answ}</p>
            </div>
          </div>
        ))}
      </>
    );
  };


export default Cuestions;