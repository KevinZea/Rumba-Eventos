import React from 'react'
import './Servicios.css'
import { FaWhatsapp } from "react-icons/fa"
import { AiOutlineControl } from "react-icons/ai"
import { BsMusicPlayer } from "react-icons/bs"
import { GiLightProjector, GiMusicSpell, GiPartyFlags } from "react-icons/gi"
import { MdPerson4, MdOutlineBubbleChart } from "react-icons/md"
import { RiMedal2Fill } from "react-icons/ri"
import { SiAirplayvideo } from "react-icons/si"
import { TbMoodKid } from "react-icons/tb"
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
                        <BsMusicPlayer></BsMusicPlayer>
                    </div>
                    <h2>Alquiler de sonido profesional</h2>
                    <h4>
                        Te ofrecemos a tu disposición equipo de sonido
                        de calidad y de gran potencia para tu celebración.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <GiLightProjector></GiLightProjector>
                    </div>
                    <h2>Show de luces led</h2>
                    <h4>
                        Te brindamos un espectacular show de luces interactivas
                        para agregar diversion y ambiente al espectaculo.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <MdPerson4></MdPerson4>
                    </div>
                    <h2>Animación y maestro de ceremonias</h2>
                    <h4>
                        Tenemos personal capaz de animar y dirigir
                        tu reunion segun el caso.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <GiMusicSpell></GiMusicSpell>
                    </div>
                    <h2>Sonorización</h2>
                    <h4>
                        Ofrecemos la sonorización de eventos bajo los
                        raiders tecnicos mas exigentes.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <GiPartyFlags></GiPartyFlags>
                    </div>
                    <h2>Organización</h2>
                    <h4>
                        Te brindamos toda la organización de tu evento por completo
                        incluyendo: comida, decoración, grupo musical, etc.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <MdOutlineBubbleChart></MdOutlineBubbleChart>
                    </div>
                    <h2>Experiencias Interactivas</h2>
                    <h4>
                        Tambien brindamos una experencia interactiva de show
                        de espuma, burbujas, venturi, disparadores de Co2,
                        plataforma 360°, espejo magico y todo tipo de accesorios
                        para eventos.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <RiMedal2Fill></RiMedal2Fill>
                    </div>
                    <h2>Ambientación</h2>
                    <h4>
                        Adecuamos el tipo de ambiente para asambleas y reuniones
                        empresariales.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <SiAirplayvideo></SiAirplayvideo>
                    </div>
                    <h2>Servicios de Video</h2>
                    <h4>
                        Tambien damos la posibilidad de brindar herramientas de
                        video beam y pantallas de proyección, para presentaciones
                        o reproducciones de videos.
                    </h4>
                </div>

                <div className='pack'>
                    <div className='icon'>
                        <TbMoodKid></TbMoodKid>
                    </div>
                    <h2>Recración</h2>
                    <h4>
                        Animamos tus fiestas infantiles con: musica,
                         titeres, inflables, etc.
                    </h4>
                </div>
            </div>
        </div>
    )
}
