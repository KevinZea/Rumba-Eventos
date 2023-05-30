
import React, { Component } from 'react'
import './Footer.css'
import { navbar_items, navbar_accounts } from '../helpers/Data'

class Footer extends Component {
	display_navbar_items = _ => {
		let items = navbar_items.map(item => {
			return (
				<a className="d-block mb-1 text-muted" href={`#${item.link}`} key={Math.random()}><i className={`${item.icon} me-2`}></i>{item.name}</a>
			)
		})
		return items
	}

	display_navbar_accounts = _ => {
		let accounts = ['Facebook', 'Instagram', 'Youtube']
		let items = navbar_accounts.map((item, index) => {
			return (
				<a className="text-capitalize d-block text-muted mb-1" href={item.link} target='_blank' rel="noreferrer" key={Math.random()}>
					<i className={`${item.icon} me-2`}></i>{accounts[index]}
				</a>
			)
		})
		return items
	}

	render() {
		return (
			<footer className='footer py-5 bg-light'>
				<div className='container'>
					<div className='row'>
						<div className='c col-lg-4 col-12 my-auto'>
							<div className='s first-side text-lg-start text-center mb-lg-0 mb-5'>
								<div className='first-sub-side'>
									<h3 className='brand-name mb-3' ><span>R</span>umba<span>E</span>ventos</h3>
									<p>+57 3196655806 - +57 3208798194</p>
									<p>Calle 23 a sur # 14c - 65 Barrio Soacha Compartir - Cristales</p>
								</div>
								<div className='second-sub-side'>
									<p className="small text-muted mb-0">&copy; Copyrights. Todos los derechos reservados. <a href="#">Rumba eventos</a></p>
								</div>
							</div>
						</div>

						<div className='c col-lg-2 col-12'>
							<div className='s second-side text-lg-start text-center mb-lg-0 mb-5'>
								<div className='title'>
									<h5 className='text-capitalize mb-4'>Atajos</h5>
								</div>
								<div className='links'>
									{this.display_navbar_items()}
								</div>
							</div>
						</div>

						<div className='c col-lg-2 col-12'>
							<div className='s third-section text-lg-start text-center mb-lg-0 mb-5'>
								<div className='title'>
									<h5 className='text-capitalize mb-4'>Nuestras redes</h5>
								</div>
								<div className='links'>
									{this.display_navbar_accounts()}

								</div>
							</div>
						</div>
						<div className='c col-lg-2 col-12'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.467427276255!2d-74.25859234458005!3d4.573021399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f75e29db55b63%3A0x4bb62a20acb9a077!2sLos%20cristales!5e0!3m2!1ses-419!2sco!4v1685484571653!5m2!1ses-419!2sco" width="350" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
