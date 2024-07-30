import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Trouve ta future maison ' subtitle='Trouve la maison de tes reves dans ta localité' />

          <form className='flex'>
            <div className='box'>
              <span>Choice</span>
              <select name="choice" id="choice" className={"box"}>
                <option value=""></option>
                <option value="appartemement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>
            <div className='box'>
              <span>Ville</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Quartier</span>
              <input type='text' placeholder='Property Type' />
            </div>

            <div className='box'>
              <span>Price Range</span>
              <input type='tel' placeholder='min' />
              <input type='tel' placeholder='max' />
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
