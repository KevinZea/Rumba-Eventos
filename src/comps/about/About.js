
import React, { Component } from 'react'
import './About.css'
import about from '../../images/pics/about.png'

class About extends Component {
	render() {
		return (
			<section className='about py-5 my-5' id='about'>
				<div className='container'>
					<div className="row align-items-center">
						<div className="c col-md-6 col-12">
							<div className='left-side text-md-start text-center mb-lg-0 mb-5'>
								<h3 className='about-name'><span>R</span>umba<span>E</span>ventos</h3>
								<p className='about-description text-muted'>Organizadores de eventos para todas las ocasiones</p>
								<p className='about-text'>
									Somos una compañia organizadora de eventos a
									nivel nacional, que se especializa en la
									ambientación y sonorización de reuniones
									familiares, sociales y empresariales.
								</p>
								<br></br>
								<p className='about-text'>
									Trabajamos bajo los mas altos estandares de
									calidad, con equipos de ultima tecnologia,
									para hacer de tus celebraciones una fecha
									inolvidable.
								</p>
								<br></br>
								<p className='about-text'>
									Contamos con montajes para pequeños, medianos
									y grandes eventos, desde una fiesta en tu casa
									hasta un concierto de grandes dimensiones.
								</p>
							</div>
						</div>
						<div className="c col-md-6 col-12">
							<div className='right-side text-lg-end text-center'>
								<img className='logoRumba' src={about} alt='about' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About