import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Inshorts clone made by - Riyazuddin Mohammed</h3>
            <hr />
            <div className='brand-icons'>
                <a href="https://www.instagram.com/riyazuddin515" target={'_blank'}>
                    <FontAwesomeIcon className='icon' icon={faInstagram} size='lg' />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-riyazuddin-8829a41a2/" target={'_blank'}>
                    <FontAwesomeIcon className='icon' icon={faLinkedinIn} size='lg' />
                </a>
            </div>
        </div>
    )
}

export default Footer
