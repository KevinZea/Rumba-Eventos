import React from 'react'
import './Carrusel.css'
import imagesCarrusel from './images-carrusel';
import {
    BsArrowLeftShort,
    BsArrowRightShort,
  } from "react-icons/bs";

export default function Carrusel() {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    return (
        <div className="app__gallery-images">
            <h1>Nuestros Clientes Satisfechos</h1>
            <div className="app__gallery-images_container" ref={scrollRef}>
                {[
                    imagesCarrusel.Uno,
                    imagesCarrusel.Dos,
                    imagesCarrusel.Tres,
                    imagesCarrusel.Cuatro,
                    
                ].map((image, index) => (
                    <div
                        className="app__gallery-images_card flex__center"
                        key={`gallery_image-${index + 1}`}
                    >
                        <img src={image} alt="gallery_image" />
                    </div>
                ))}
            </div>
            <div className="app__gallery-images_arrows">
                <BsArrowLeftShort
                    className="gallery__arrow-icon"
                    onClick={() => scroll("left")}
                />
                <BsArrowRightShort
                    className="gallery__arrow-icon"
                    onClick={() => scroll("right")}
                />
            </div>
        </div>
    )
}
