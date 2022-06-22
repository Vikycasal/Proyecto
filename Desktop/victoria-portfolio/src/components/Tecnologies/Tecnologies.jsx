import React from 'react';
import "../Tecnologies/Tecnologies.css";
import {AiFillHtml5} from "react-icons/ai"
import {SiCss3, SiJavascript, SiRedux, SiBootstrap, SiReact} from "react-icons/si"
import {FaNode} from "react-icons/fa"
import {SiMongodb, SiPostgresql} from "react-icons/si"

const Tecnologies = () => {
  return (
    <section id="tecnologies">
       <h5>What Skills I have</h5>
       <h2>Tecnologies</h2>

       <div className='container tecnologies__container'>
         <div className='tecnologies__frontend'>
           <h3>Frontend Development</h3>
           <div className='tecnologies__content'>
             <article className="tecnologies__details">
              <AiFillHtml5 className='tecnologies__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
              </article>
              <article className="tecnologies__details">
              <SiCss3 className="tecnologies__details-icon"/>
              <div>
              <h4>CSS</h4>
              </div>
              </article>
              <article className="tecnologies__details">
              <SiJavascript className="tecnologies__details-icon"/>
              <div>
              <h4>Javascript</h4>
              </div>
              </article>
              <article className="tecnologies__details">
              <SiBootstrap className="tecnologies__details-icon"/>
              <div>
              <h4>Bootstrap</h4>
              </div>
              </article>
              <article className="tecnologies__details">
              <SiReact className="tecnologies__details-icon"/>
              <div>
              <h4>React</h4>
              </div>
              </article>
              <article className="tecnologies__details">
              <SiRedux className="tecnologies__details-icon"/>
              <div>
              <h4>Redux</h4>
              </div>
             </article>
           </div>
         </div>
         <div className='tecnologies__backend'>
          <h3>Backend Development</h3>
           <div className='tecnologies__content'>
            <article className="tecnologies__details">
            <FaNode className="tecnologies__details-icon"/>
            <div>
            <h4>Node Js</h4>
            </div>
            </article>
            <article className="tecnologies__details">
            <SiMongodb className="tecnologies__details-icon"/>
            <div>
            <h4>Mongo Db</h4>
            </div>
            </article>
            <article className="tecnologies__details">
            <SiPostgresql className="tecnologies__details-icon"/>
            <div>
            <h4>Postgres</h4>
            </div>
            </article>
           </div>
         </div>
       </div>
    </section>
  )
}

export default Tecnologies