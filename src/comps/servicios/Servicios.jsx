import React from 'react'
import './Servicios.css'
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineControl } from "react-icons/ai"
export default function Servicios() {
    return (
        <div className='servicios'>
            <div className='service-text'>
                <span>Nuestros Servicios</span>
                <br />
                <h1>Qué Ofrecemos</h1>
                <h3>_______________________</h3>
                <h4>En Rumba Eventos se personaliza tus celebraciones</h4>
                <p>Preguntanos que tipo de servicios requieres y que podemos
                    ofrecerte para hacer de tus celebraciones las mejores organizadas
                </p>
                <br />
                <div className='whatsappbtn'>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        Escribenos
                        <FaWhatsapp></FaWhatsapp>
                    </a>
                </div>
            </div>
            <div className='services-icons'>
                <div className='pack'>
                    <div className='icon'>
                        <AiOutlineControl></AiOutlineControl>
                    </div>
                    <h2>Paquetes de Montaje</h2>
                    <h4>Ofrecemos el servicio de montaje de sonido, luces
                        especiales y un DJ para hacer mejor el ambiente de
                        tu evento.
                    </h4>
                </div>
                <div className='pack'>
                    <div className='icon'>
                        <AiOutlineControl></AiOutlineControl>
                    </div>
                    <h2>Paquetes de Montaje</h2>
                    <h4>Ofrecemos el servicio de montaje de sonido, luces
                        especiales y un DJ para hacer mejor el ambiente de
                        tu evento.
                    </h4>
                </div>
                <div className='pack'>
                    <div className='icon'>
                        <AiOutlineControl></AiOutlineControl>
                    </div>
                    <h2>Paquetes de Montaje</h2>
                    <h4>Ofrecemos el servicio de montaje de sonido, luces
                        especiales y un DJ para hacer mejor el ambiente de
                        tu evento.
                    </h4>
                </div>
                <div className='pack'>
                    <div className='icon'>
                        <AiOutlineControl></AiOutlineControl>
                    </div>
                    <h2>Paquetes de Montaje</h2>
                    <h4>Ofrecemos el servicio de montaje de sonido, luces
                        especiales y un DJ para hacer mejor el ambiente de
                        tu evento.
                    </h4>
                </div>
            </div>
        </div>
    )
}
