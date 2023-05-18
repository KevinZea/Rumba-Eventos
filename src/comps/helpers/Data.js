
let navbar_items = [
	{
		name: 'Inicio',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'Información',
		icon: 'fas fa-address-card',
		link: 'about'
	},
	{
		name: 'Videos',
		icon: 'fas fa-tv',
		link: 'products'
	},
	{
		name: 'Imágenes',
		icon: 'fas fa-image',
		link: 'blogs'
	},
	{
		name: 'Contacto',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbar_accounts = [
	{
		link: 'https://www.facebook.com/rumbaeventosf?mibextid=ZbWKwL',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://instagram.com/rumbaeventossoacha?igshid=NTc4MTIwNjQ2YQ==',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://youtube.com/@rumbaeventos7541',
		icon: 'fab fa-youtube'
	}
]


let top_blogs = [
	{
		img: require('../../images/slider/1.jpeg'),
		alt: 'blog 1'
	},
	{
		img: require('../../images/slider/2.jpeg'),
		alt: 'blog 2'
	},
	{
		img: require('../../images/slider/3.jpeg'),
		alt: 'blog 3'
	},
	{
		img: require('../../images/slider/5.jpeg'),
		alt: 'blog 4'
	},
	{
		img: require('../../images/slider/4.jpeg'),
		alt: 'blog 5'
	}
]

let recent_blogs = [
	{
		img: require('../../images/recent/1.jpeg'),
		alt: 'blog 6',
		mar: 'mb-3'
	},
	{
		img: require('../../images/recent/2.jpeg'),
		alt: 'blog 7',
		mar: ''
	}
]



let contact = [
	{
		type: 'e-mail',
		info: 'correorumbaeventos@gmail.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '+57 3196655806 - +57 3208798194',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: 'Calle 23 a sur # 14c - 65 Barrio Soacha Compartir - Cristales',
		icon: 'fas fa-map-marker-alt'
	},
]

export
{
	navbar_items,
	navbar_accounts,
	top_blogs,
	recent_blogs,
	contact
}