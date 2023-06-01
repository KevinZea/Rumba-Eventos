
import React, { Component } from 'react'
import './Contact.css'
import contact_pic from '../../images/pics/contact.jpg'
import { contact } from '../helpers/Data'

class Contact extends Component {
	display_contact_items = _ => {
		let items = contact.map(item => {
			return (
				<div className={item.type} key={Math.random()}>
					{item.hasOwnProperty('link') ? (
						<div className={item.type} key={Math.random()}>
							<p className='ps-3'>
								<a target='_blank' href={item.link}
									className='linkis'>
									{item.info}
									<i className={`${item.icon} ms-1`}></i>
								</a>
							</p>
						</div>
					) :
						<div className={item.type} key={Math.random()}>
							<p className='ps-3'>
								{item.info}
								<i className={`${item.icon} ms-1`}></i>
							</p>
						</div>
					}

				</div>
			)
		})
		return items
	}

	render() {
		return (
			<section className='contact py-5 mb-5' id='contact'>
				<div className='container'>
					<div className='title'>
						<h2 className='text-capitalize text-center mb-5 position-relative p-3'>Nuestro Contacto</h2>
					</div>

					<div className='row align-items-center'>
						<div className='c col-md-7 col-12'>
							<div className='left-side mb-lg-0 mb-5'>
								<div className='info'>
									{this.display_contact_items()}
								</div>
								<div className='contactoWhatsapp'>
									<a target='_blank'
										href='https://api.whatsapp.com/send?phone=573208798194'
									>Escribenos
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
											<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
										</svg>
									</a>

								</div>
							</div>
						</div>
						<div className='c col-md-5 col-12'>
							<div className='right-side text-lg-end text-center'>
								<img className='img-fluid w-75 shadow-lg' src={contact_pic} alt='contact_pic' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Contact