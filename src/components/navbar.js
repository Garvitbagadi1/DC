import React, { useState } from "react";
import "./Navbarstyle.css";
import {Link} from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [click , setclick] = useState(false);
    const handleClick = () =>setclick(!click);
    const [color,setColor] =useState(false);
    const changecolor = () =>{
    if(window.scrollY >=50){
        setColor(true);
    }else{
        setColor(false);
    }
    };
    window.addEventListener("scroll",changecolor);
    return(
        <div className={color ? "header header-bg": "header"}>
            <Link to="/" >
                <h1 className="h" >HEALTH</h1>
            </Link>
                
            <ul className={click ? "nav-menu active" : "nav-menu "}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSepJFRGr1nJkfYqoiY7daUesaY05Z8PyXyDqf3W0AjbaB1f5Q/viewform?usp=sf_link" target="blank">Survey</Link>
                </li>
                <li>
                    <Link to="/Article">Guid And Support</Link>
                 </li>
                 <li>
                    <Link to="/Bot">Chat Bot</Link>
                </li>
            </ul>
            <div className="faa" onClick={handleClick}>
                {click ? (
                <FaTimes size={20} style={{color: "#fff"}} />):(
                <FaBars size={20} style={{color: "#fff"}}
                />)}
            </div>   
        </div>
    );
};
export default Navbar;