import "./Hero.css";
import React from 'react';
import mh from "../assets/mh.avif";
import {Link} from "react-router-dom";

export const Heroimg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="into-img"
        src={mh} alt="img not found"/>
    </div>
        <div className="content">
            <h1>Take a Mental Health Test</h1>
            <br></br>
            <p>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p>
            
            <br></br>
            <div className="tests">
                <Link to="/Depression" className="btn btn-light">DEPRESSION TEST</Link>
                <Link to="/Post" className="btn btn-light">POSTPARTUM DEPRESSION TEST</Link>
                <Link to="/Anxity" className="btn btn-light">Anxiety TEST</Link>
                
            </div>
            <br></br>
            <div className="tests">
            <Link to="/ADHD" className="btn btn-light">ADHD TEST</Link>
            <Link to="/BIPOLAR" className="btn btn-light">BIPOLAR TEST</Link>
            <Link to="/Pst" className="btn btn-light">PSYCHOSIS & SCHIZOPHRENIA TEST</Link>
            </div>
            <br></br>
            <div className="tests">
            <Link to="/Ptsd" className="btn btn-light">PTSD TEST</Link>
            <Link to="/Eat" className="btn btn-light">EATING DISORDER TEST</Link>
            <Link to="/Addiction" className="btn btn-light">ADDICTION TEST</Link>
            </div>
            <br></br>
            <div className="tests">
            <Link to="/Child" className="btn btn-light">Parent Test: Your Child’s Mental Health  </Link>
            <Link to="/Ymental" className="btn btn-light">Youth Mental Health Test </Link>
            </div>
        </div>
  </div>
  );
  };
export default Heroimg;
