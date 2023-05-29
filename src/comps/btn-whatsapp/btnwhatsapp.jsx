import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai"
import "./btnwhatsapp.css"
export default function () {
    return (
        <div className='boton'>
            <a href="https://api.whatsapp.com/send?phone=573208798194" target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp className='iconoWhatsapp'></AiOutlineWhatsApp>
            </a>
        </div>
    )
}


