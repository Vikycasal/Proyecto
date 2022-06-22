import React from 'react'
import Yo from "../Import/Yo.jpeg";
import {FaAward} from "react-icons/fa"
import {AiFillFolderOpen} from "react-icons/ai"
import "../About/About.css"
import Botones from "../LandingPage/Botones";

const About = () => {
  return (
    <section id="about">
      <div className="container header__container">
             <h5>Hello I'm</h5>
             <h1>Victoria Casal</h1>
             <h5 className="text-light">FullStack Developer</h5>
             <Botones/>
      </div>
             <h2>  </h2>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='"container about__container'>
       <div className='about__me'>
         <div className='about__me-image'>
         <img src={Yo} alt=""/>
         </div>
       </div>
       <div className='todo'>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1+ Years Working</small>
          </article>
          <article className='about__card'>
              <AiFillFolderOpen  className='about__icon'/>
              <h5>Proyectos</h5>
              <small>5+ Completados</small>
          </article>
        </div>
        <p>Me llamo Victoria, y soy Fullstack Developer, pero me inclino mas al Front End. Descubri el mundo de la programacion recientemente hace dos años, y desde entonces decidi enfocarme 100% a esto, me di cuenta que es lo que mas me gusta, tengo muchas ganas de seguir aprendiendo y cada vez crecer mas!</p>
       <a href="#contact" className='btn btn-primary'>Contactame</a>
       </div>
       </div>
      </div>
    </section>
  )
}

export default About

//aclaraciones
//Falta poner u otra imagen o una nueva