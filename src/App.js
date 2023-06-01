
import React, {Component} from 'react'
import Header from './comps/header/Header'
import Navbar from './comps/navbar/Navbar'
import About from './comps/about/About'
import Subscription from './comps/subscription/Subscription'
import Products from './comps/products/Products'
import Blogs from './comps/blogs/Blogs'
import Faq from './comps/faq/Faq'
import Contact from './comps/contact/Contact'
import Footer from './comps/footer/Footer'
import Sb from './comps/sb/Sb'
import Btn from './comps/btn-whatsapp/btnwhatsapp'
import Servicios from './comps/servicios/Servicios'
import Cotizacion from './comps/cotizacion/Cotizacion'
import Carrusel from './comps/Carrusel/Carrusel'
class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <Btn></Btn>
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    {/* <Subscription /> */}
                    <Servicios/>
                    <Products />
                    <Blogs />
                    <Carrusel/>
                    <Faq />
                    <Cotizacion/>
                    <br></br>
                    <br></br>
                    <Contact />
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;
