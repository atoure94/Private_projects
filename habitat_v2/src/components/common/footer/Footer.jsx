import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Avez-vous des questions??</h1>
              <p>Nous vous aiderons à faire progresser votre carrière et à atteindre la croissance.</p>
            </div>
            <button className='btn5'>Contactez-nous aujourd'hui</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              LOGO
              <h2>Avez-vous besoin d'aide ?</h2>
              <p>Recevez des mises à jour, des offres spéciales, des tutoriels et des réductions directement dans votre boîte de réception chaque mois.</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {/*
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}*/}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 Holicorp. Designd By Chouchou des nanas.</span>
      </div>
    </>
  )
}

export default Footer
