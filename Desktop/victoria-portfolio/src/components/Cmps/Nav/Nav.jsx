import React from 'react'
import "../Nav/Nav.css";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {FiBook} from "react-icons/fi"
import {MdComputer} from "react-icons/md";
import {IoMdContact} from "react-icons/io"
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
        <a href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        ><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav("#about")} className='{activeNav === "about" ? "active" : ""}'><AiOutlineUser /></a>
        <a href="#tecnologies" onClick={() => setActiveNav("#tecnologies")} className='{activeNav === "tecnologies" ? "active" : ""}'><MdComputer /></a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className='{activeNav === "experience" ? "active" : ""}'><FiBook /></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className='{activeNav === "contact" ? "active" : ""}'><IoMdContact /></a>
    </nav>
  )
}

export default Nav