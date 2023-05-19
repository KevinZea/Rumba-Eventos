
import React, {Component} from 'react'
import './Blogs.css'
import {top_blogs, recent_blogs} from '../helpers/Data'

class Blogs extends Component
{
	display_top_blogs = _ =>
	{
		let items = top_blogs.map(item =>
		{
			return (
				<div className = 'c col-lg-6 col-12 mb-4' key = {Math.random()}>
					<div className = 'card shadow-lg'>
						<img className = 'card-img-top' src = {item.img} alt = {item.alt}/>
					</div>
				</div>
			)
		})
		return items
	}

	display_recent_blogs = _ =>
	{
		let items = recent_blogs.map(item =>
		{
			return (
				<div className = {`c col-12 ${item.mar}`} key = {Math.random()}>
					<div className = 'card shadow-lg'>
						<img className = 'card-img-top' src = {item.img} alt = {item.alt}/>
					</div>
				</div>
			)
		})
		return items
	}

	render()
	{
		return (
			<section className = 'blogs py-5 mb-5' id = 'blogs'>
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 position-relative p-3'>Imágenes</h2>
					</div>

					<div className = 'row'>
						<div className = 'c col-lg-8 col-12'>
							<div className = 'row'>
								<div className = 'left-side-title mb-3'>
									<h3 className = 'title text-center position-relative p-3 text-capitalize'>Destacadas</h3>
								</div>
								{this.display_top_blogs()}
							</div>
						</div>

						<div className = 'c col-lg-4 col-12'>
							<div className = 'row'>
								<div className = 'right-side-title mb-3'>
									<h3 className = 'title text-center position-relative p-3 text-capitalize'>Recientes</h3>
								</div>
								{this.display_recent_blogs()}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Blogs