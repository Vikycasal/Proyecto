import React from "react";
import "../LandingPage/LandingPage.css"
import Botones from "./Botones";
import Yo from "../Import/Yo.jpeg";
import LandingSocial from "./LandingSocial";
import Nav from "../Nav/Nav";

export default function LandingPage () {
    return(
       <header>
           <div className="container header__container">
             <h5>Hello I'm</h5>
             <h1>Victoria Casal</h1>
             <h5 className="text-light">FullStack Developer</h5>
             <Botones/>
             <LandingSocial />
             
            <div className="Yo">
              <img src={Yo} alt=""/>
            </div>
          
            <a href="#contact" className="scroll__down">Scroll Down</a>
           </div>
       </header> 
    );
}