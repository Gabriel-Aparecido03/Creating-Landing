import React from 'react'

import logo from '../assets/image/logo.svg'
import logoConnect from '../assets/image/logo_MetaMask.svg'

import './style.scss'

export function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="image-content">
                    <img src={logo} alt="" />
                </div>
                <div className="section-content">
                    <p>Comprar NFT</p>
                    <p>Sober</p>
                    <p>FAQ</p>
                </div>
                <div className="connect-button">
                    <button>
                        <img src={logoConnect} alt="" />
                        <p>Connectar carteira</p>
                    </button>
                </div>
            </div>
        </header>
    )
}