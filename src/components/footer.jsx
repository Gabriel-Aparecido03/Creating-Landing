import React from 'react'

import './footer.scss'

import logo from '../assets/image/logo.svg'
import arrowUp from '../assets/image/arrow-black.svg'

import instagram from '../assets/image/instagram.svg'
import youtube from '../assets/image/youtube.svg'
import twitter from '../assets/image/twitter.svg'
import email from '../assets/image/email.svg'

export function Footer() {
    return (
        <div id="Footer">
            <footer>
                <div className="first-content-footer">
                    <img src={logo} alt="" />
                    <button><img src={arrowUp} alt="" /></button>
                </div>
                <div className="second-content-footer">
                    <aside>
                        <h1>Fique por dentro de <span>todas as novidades</span></h1>
                        <div className="email-box">
                            <input type="text" />
                            <button>Enviar</button>
                        </div>
                    </aside>
                    <div className="main-second-content">
                    <ul>
                        <li>
                            <h6>Empresa</h6>
                            <p>Sobre</p>
                            <p>Serviços</p>
                            <p>Time</p>
                            <p>Carreira</p>
                        </li>
                        <li>
                            <h6>Mapa</h6>
                            <p>Galeria</p>
                            <p>Populares</p>
                            <p>Vendas</p>
                            <p>Contato</p>
                        </li>
                        <li>
                            <h6>Links</h6>
                            <p>FAQs</p>
                            <p>Termos</p>
                            <p>Politica</p>
                            <p>Ajuda</p>
                        </li>
                    </ul>
                    </div>
                    
                </div>
                <div className="third-content-footer">
                <div className="contact">
                        <div className="site">
                            <p>www.rocketseat.com.br</p>
                        </div>
                        <div className="links">
                            <img src={instagram} alt="" />
                            <img src={youtube} alt="" />
                            <img src={twitter} alt="" />
                            <img src={email} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}