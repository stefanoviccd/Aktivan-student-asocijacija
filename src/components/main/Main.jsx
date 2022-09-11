import React from 'react'
import './main.css';
import { Link } from 'react-router-dom';

function AS() {
  return (
    <>    
    <div className='grid-div first'>
      <button><Link className='link' to="/asocijacija1"> Asocijacija 1</Link></button>
      <button><Link className='link' to="/asocijacija2"> Asocijacija 2</Link></button>
      <button><Link  className='link' to="/asocijacija3"> Asocijacija 3</Link></button></div>
    <div className='grid-div'>
    <button><Link  className='link' to="/asocijacija4"> Asocijacija 4</Link></button>
    <button><Link  className='link' to="/asocijacija5"> Asocijacija 5</Link></button>
    <button><Link  className='link' to="/asocijacija6"> Asocijacija 6</Link></button>
    </div>
    <div className='grid-div'>
    <button><Link  className='link' to="/asocijacija7"> Asocijacija 7</Link></button>
    <button><Link  className='link' to="/asocijacija8"> Asocijacija 8</Link></button>
    <button><Link  className='link' to="/asocijacija9"> Asocijacija 9</Link></button></div>
    <img className='logo' src='./logo.jpeg'></img></>


  )
}

export default AS