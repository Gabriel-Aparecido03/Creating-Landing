import React from 'react'

import { Header } from './components/header'
import { Footer } from './components/footer'

import peopleCollection from './assets/image/group-avarts.png'
import badge from './assets/image/badge.svg'

import photo1 from './assets/image/galeria-1.png'
import photo2 from './assets/image/galeria-2.png'
import photo3 from './assets/image/galeria-3.png'
import photo4 from './assets/image/galeria-4.png'
import photo5 from './assets/image/galeria-5.png'
import photo6 from './assets/image/galeria-6.png'
import photo7 from './assets/image/galeria-7.png'
import photo8 from './assets/image/galeria-8.png'

import banner from './assets/image/banner.png'

import nft1 from './assets/image/astronauta 1.png'
import nft2 from './assets/image/astronauta-2.png'
import nft3 from './assets/image/astronauta-3.png'
import nft4 from './assets/image/astronauta-4.png'

import people1 from './assets/image/artista-1.png'
import people2 from './assets/image/artista-2.png'
import people3 from './assets/image/artista-3.png'
import people4 from './assets/image/artista-4.png'
import people5 from './assets/image/artista-5.png'
import people6 from './assets/image/artista-6.png'

import arrowWhite from './assets/image/arrow-white.svg'
import arrowOrange from './assets/image/arrow-orange.svg'

import './style.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="first-content">

        <div className="text-content">
          <div className="sub-content">
            <div className="sub-text-content">
              <h2>Mercado digital para colecionáveis em crito e tokens não fungível(NFT).Compre,venda e descubra ativos digitais exclusivos para você.</h2>
              <div className="people-sub-content">
                <img src={peopleCollection}alt="" />
                <div className="people-sub-text-content">
                  <h4>+10</h4>
                  <p>Artistas selecionados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="principal-first-content">
            <h1>Descubra a verdadeira arte digital e combine diversar <span>NFTs</span></h1>
          </div>
          <div className="logo-first-content">
            <img src={badge} alt="" />
          </div>
        </div>
        <div className="photos-content">
          <div className="photos-grid">
            <div className="photo">
              <img src={photo1} alt="" />
            </div>
            <div className="photo">
              <img src={photo2} alt="" />
            </div>
            <div className="photo">
              <img src={photo3} alt="" />
            </div>
            <div className="photo">
              <img src={photo4} alt="" />
            </div>
            <div className="photo">
              <img src={photo5} alt="" />
            </div>
            <div className="photo">
              <img src={photo6} alt="" />
            </div>
            <div className="photo">
              <img src={photo7} alt="" />
            </div>
            <div className="photo">
              <img src={photo8} alt="" />
            </div>
          </div>
        </div>

      </div>
      <div className="second-content">
        <aside>
          <div className="text">
            <p>10k+</p>
            <span>Artes</span>
          </div>
          <div className="text">
            <p>200+</p>
            <span>Vendas</span>
          </div>
          <div className="text">
            <p>20</p>
            <span>Artistas</span>
          </div>
        </aside>
        <div className="main-second-content">
          <div className="text-second-content">
            <div className="text">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo corrupti alias ut eius consequatur quam laborum reiciendis dolorum harum vitae adipisci officiis cum commodi sint non, quas asperiores odio!
              </p>
              <a href="">Lorem ipsum</a>
            </div>
            <div className="text">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo corrupti alias ut eius consequatur quam laborum reiciendis dolorum harum vitae adipisci officiis cum commodi sint non, quas asperiores odio!
              </p>
              <a href="">Lorem ipsum</a>
            </div>
          </div>
          <div className="image-content">
           <img src={banner} alt="" />
          </div>
        </div>
      </div>
      <div className="third-content">
        <div className="content">
          <h1><span>Populares</span> da semana</h1>

          <div className="popular-week-content-grid">
            <div className="column">
              <div className="nft">
                
                <div className="title">
                  <h1>Astronauta1</h1>
                  <img src={arrowWhite} alt="" />
                </div>
                <div className="artist">
                  <p className="name">Mayk Brito</p>
                  <p className="value">1.50 RKT</p>
                </div>
                <div className="image">
                  <img src={nft1} alt="" />
                </div>
                
              </div>

              <div className="nft">
                
                <div className="title">
                  <h1>Astronautae</h1>
                  <img src={arrowWhite} alt="" />
                </div>
                <div className="artist">
                  <p className="name">João Inácio (Biro)</p>
                  <p className="value">3.75 RKT</p>
                </div>
                <div className="image">
                  <img src={nft3} alt="" />
                </div>
                
              </div>
            </div>
            <div className="column">
              <div className="nft">
                <div className="title">
                  <h1>Astronauta2</h1>
                  <img src={arrowWhite} alt="" />
                </div>
                <div className="artist">
                  <p className="name">Jakeliny Gracielly</p>
                  <p className="value">1.50 RKT</p>
                </div>
                <div className="image">
                  <img src={nft2} alt="" />
                </div>
              </div>
              <div className="nft">
                <div className="title">
                  <h1>Astronauta4</h1>
                  <img src={arrowWhite} alt="" />
                </div>
                <div className="artist">
                  <p className="name">Tamires Santos</p>
                  <p className="value">4.30 RKT</p>
                </div>
                <div className="image">
                  <img src={nft2} alt="" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="fourth-content">
        <div className="content">
          <h1>Melhores <span>artistas</span></h1>
          <div className="grid-artist">
            <div className="artist">
              <div className="image-content">
                <img src={people1} alt="" />
              </div>
              <div className="infos">
                <h1>Mayk Brito</h1>
                <p>80 fotografias</p>
              </div>
            </div>

            <div className="artist">
              <div className="image-content">
                <img src={people2} alt="" />
              </div>
              <div className="infos">
                <h1>Jakeliny G.</h1>
                <p>100 fotografias</p>
              </div>
            </div>

            <div className="artist">
              <div className="image-content">
                <img src={people3} alt="" />
              </div>
              <div className="infos">
                <h1>João I.(Biro)</h1>
                <p>10 fotografias</p>
              </div>
            </div>

            <div className="artist">
              <div className="image-content">
                <img src={people4} alt="" />
              </div>
              <div className="infos">
                <h1>Tamires Santos</h1>
                <p>12 fotografias</p>
              </div>
            </div>

            <div className="artist">
              <div className="image-content">
                <img src={people5} alt="" />
              </div>
              <div className="infos">
                <h1>Ana Silva</h1>
                <p>19 fotografias</p>
              </div>
            </div>

            <div className="artist">
              <div className="image-content">
                <img src={people6} alt="" />
              </div>
              <div className="infos">
                <h1>João I.(Biro)</h1>
                <p>10 fotografias</p>
              </div>
            </div>


          </div>

          <div className="more-informations">
            <h3>Ver todos os artistas </h3>
            <img src={arrowOrange} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
