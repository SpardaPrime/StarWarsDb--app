import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header =()=>{
  const[people,setPeople]=useState(false);
  const[planets,setPlanets]=useState(false);
  const[starship,setStarship]=useState(false);
  const[header,setHeader]=useState(true);

  const addClass=(e)=>{
    if(e.target.textContent==='Characters'){
      setPeople(true);;
      setPlanets(false)
      setStarship(false);
      setHeader(false);
    }else if(e.target.textContent==='Planets'){
      setPeople(false);
      setPlanets(true);
      setStarship(false);
      setHeader(false);
    }else if(e.target.textContent==='Starships'){
      setPeople(false);
      setPlanets(false);
      setStarship(true);
      setHeader(false);
    }else{
      setHeader(true);
      setPeople(false);
      setPlanets(false);
      setStarship(false);
    }
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-size-bar">
 
    <Link to="/home/"><h1 onClick={addClass} className={`navbar-brand ${header?'visited':''}`}>Star wars DB</h1></Link>

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav mr-auto">
      <li className={`nav-item  link ${people?'visited':''}`} onClick={addClass}>
        <Link to="/home/people">Characters</Link>
      </li>
      <li className={`nav-item  link ${planets?'visited':''}`}  onClick={addClass}>
        <Link to="/home/planets">Planets</Link>
      </li>
      <li className={`nav-item  link ${starship?'visited':''}`}  onClick={addClass}>
        <Link to="/home/starships">Starships</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}
export default Header;