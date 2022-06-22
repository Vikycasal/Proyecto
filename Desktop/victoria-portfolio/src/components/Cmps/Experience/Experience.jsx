import React from 'react'
import "../Experience/Experience.css"
import CarritoVue from "../Experience/CarritoVue.png"
import Rubrit from "../Experience/Rubrit.png"
import FoodPi from "../Experience/FoodPi.png"

const Experience = () => {
  return (
    <section id = "experience">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Ecommerce, Con Vue Js-Vuex</h3>
        <img src={CarritoVue} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/CarritoCompra-Vue" className='btn' target="_blank">Ver Codigo</a>
       </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Spa- Recetas de comida</h3>
        <img src={FoodPi} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/PI-Food" className='btn' target="_blank">Codigo</a>
     </div>
        </article>
        <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
         <img src="" alt="" />
        <h3>Rubrit App</h3>
        <img src={Rubrit} alt="" className='ImgExperiencia'/>
        <div className='portfolio__item-cta'>
        <a href="https://github.com/Vikycasal/Rubrit-App" className='btn' target="_blank">Codigo</a>
        <a href="https://www.youtube.com/watch?v=htS2-3gpf0U" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Experience

//Faltaria poner bien los link de codigos e importar imagenes y tambien poner los videos