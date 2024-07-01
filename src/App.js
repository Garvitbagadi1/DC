import React from "react";
import "./index.css";
import Home from "./routes/Home";
// import Project from "./routes/Project";
import ADHD from "./routes/ADHD";
import Anxity from "./routes/anxity";
import BIPOLAR from "./routes/bipolar";
import Pst from "./routes/Pst";
import Addiction from "./routes/Addiction"
import Eat from "./routes/Eat";
import Ptsd from "./routes/Ptsd";
import Depression from "./routes/Depression";
import Post from "./routes/Post";
import Child from "./routes/Child";
import Article from "./routes/Article";
import Bot from "./routes/Bot";
import Ymental from "./routes/Ymental";
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/Article"  element={<Article/>}/>
      <Route  path="/Anxity"  element={<Anxity/>}/>
      <Route  path="/Addiction"  element={<Addiction/>}/>
      <Route  path="/ADHD"  element={<ADHD/>}/>
      <Route  path="/BIPOLAR"  element={<BIPOLAR/>}/>
      <Route  path="/Ymental"  element={<Ymental/>}/>
      <Route  path="/Pst"  element={<Pst/>}/>
      <Route  path="/Eat"  element={<Eat/>}/>
      <Route  path="/Bot"  element={<Bot/>}/>
      <Route  path="/Child"  element={<Child/>}/>
      <Route  path="/Ptsd"  element={<Ptsd/>}/>
      <Route  path="/Depression"  element={<Depression/>}/>
      <Route  path="/Post"  element={<Post/>}/>
    </Routes>
    </>
  );

}

export default App;
