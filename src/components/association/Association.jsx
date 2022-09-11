import React from 'react'
import './association.css';
import { useState, useEffect } from 'react';
import Timer from '../timer/Timer';
import Confettes from '../confetti/Confettes';

function Association(props) {

    const handleAFieldClick=function(e, num){
        e.preventDefault()
        switch(num){
            case 1:
                setA1(props.colA.a1);
                break;
            case 2:
                 setA2(props.colA.a2);
                 break;
             case 3:
                setA3(props.colA.a3);
                break;
             case 4:
                setA4(props.colA.a4);
                break;
                
        }
    
    }
    const handleBFieldClick=function(e, num){
        e.preventDefault()
        switch(num){
            case 1:
                setB1(props.colB.b1);
                break;
            case 2:
                 setB2(props.colB.b2);
                 break;
             case 3:
                setB3(props.colB.b3);
                break;
             case 4:
                setB4(props.colB.b4);
                break;
                
        }
    
    }

    const handleCFieldClick=function(e, num){
        e.preventDefault()
        switch(num){
            case 1:
                setC1(props.colC.c1);
                break;
            case 2:
                 setC2(props.colC.c2);
                 break;
             case 3:
                setC3(props.colC.c3);
                break;
             case 4:
                setC4(props.colC.c4);
                break;
                
        }
    
    }
    const handleDFieldClick=function(e, num){
        e.preventDefault()
        switch(num){
            case 1:
                setD1(props.colD.d1);
                break;
            case 2:
                 setD2(props.colD.d2);
                 break;
             case 3:
                setD3(props.colD.d3);
                break;
             case 4:
                setD4(props.colD.d4);
                break;
                
        }
    
    }

    const handleAClick=function(e){
        e.preventDefault()
        setA1(props.colA.a1);
        setA2(props.colA.a2)
        setA3(props.colA.a3)
        setA4(props.colA.a4)
        setA(props.colA.a)
        setBtnClassA("guessed")
    }
    const handleBClick=function(e){
        e.preventDefault()
        setB1(props.colB.b1)
        setB2(props.colB.b2)
        setB3(props.colB.b3)
        setB4(props.colB.b4)
        setB(props.colB.b)
        setBtnClassB("guessed")
    }
    const handleCClick=function(e){
        e.preventDefault()
        console.log("KOLONA C")
        console.log(props.colC)
        setC1(props.colC.c1)
        setC2(props.colC.c2)
        setC3(props.colC.c3)
        setC4(props.colC.c4)
        setC(props.colC.c)
        setBtnClassC("guessed")
    }
    const handleDClick=function(e){
        e.preventDefault()
        setD1(props.colD.d1)
        setD2(props.colD.d2)
        setD3(props.colD.d3)
        setD4(props.colD.d4)
        setD(props.colD.d)
        setBtnClassD("guessed")
    }
    const handleFinalAnswerGuessed=function(e){
        e.preventDefault()
        handleAClick(e)
        handleBClick(e)
        handleCClick(e)
        handleDClick(e)
        setFinalGuess(props.guess)
        setFinalButtonClass("finalGuessed")
        setShowConfetti(true)
        setShowDialog(false)
        setIsWinner(true)
    }
    const [a1, setA1] = useState("A1");
    const [a2, setA2] = useState("A2");
    const [a3, setA3] = useState("A3");
    const [a4, setA4] = useState("A4");
    const [a, setA] = useState("A");
    const [b1, setB1] = useState("B1");
    const [b2, setB2] = useState("B2");
    const [b3, setB3] = useState("B3");
    const [b4, setB4] = useState("B4");
    const [b, setB] = useState("B");
    const [c1, setC1] = useState("C1");
    const [c2, setC2] = useState("C2");
    const [c3, setC3] = useState("C3");
    const [c4, setC4] = useState("C4");
    const [c, setC] = useState("C");
    const [d1, setD1] = useState("D1");
    const [d2, setD2] = useState("D2");
    const [d3, setD3] = useState("D3");
    const [d4, setD4] = useState("D4");
    const [d, setD] = useState("D");
    const [finalGuess, setFinalGuess]=useState("Konačno rešenje")
    const [btnClassA, setBtnClassA] = useState("")
    const [btnClassB, setBtnClassB] = useState("")
    const [btnClassC, setBtnClassC] = useState("")
    const [btnClassD, setBtnClassD] = useState("")
    const [finalButtonClass, setFinalButtonClass] = useState("")
    const [columnA, setColumnA]=useState([])
    const[showConfetti, setShowConfetti]=useState(false)
    const [showDialog, setShowDialog]=useState(true)
    const [isWinner, setIsWinner]=useState(false)
    useEffect(() => {
        setColumnA(props.colA)
        
      }, []);
      const removeConfettes= function(e){
        e.preventDefault();
        setShowConfetti(false)
      }
      const getShowDialog=function(){
        return showDialog;
      }
      const resetFields=function(){
        setA1("A1")
        setA2("A2")
        setA3("A3")
        setA4("A4")
        setA("A")

        setB1("B1")
        setB2("B2")
        setB3("B3")
        setB4("B4")
        setB("B")

        setC1("C1")
        setC2("C2")
        setC3("C3")
        setC4("C4")
        setC("C")

        setD1("D1")
        setD2("D2")
        setD3("D3")
        setD4("D4")
        setD("D")

        setFinalGuess("Konačno rešenje")
        setFinalButtonClass("")
        setBtnClassA("")
        setBtnClassB("")
        setBtnClassC("")
        setBtnClassD("")
        setIsWinner(false)
      }

  return (

    <> 
    { showConfetti ? <Confettes></Confettes> : <></>}
    <div className='timer'>
        <Timer removeConfettes={removeConfettes} getShowDialog={getShowDialog} isWinner={isWinner} resetFields={resetFields}></Timer></div>
    <div className='first-row'>
        <button className='fl' onClick={e=>handleAFieldClick(e,4)}>{a4}</button>
        <button className='fr' onClick={e=>handleBFieldClick(e,4)}>{b4}</button>
    </div>
    <div className='second-row'>
        <button className='sl' onClick={e=>handleAFieldClick(e,3)}>{a3}</button>
        <button  className='sr' onClick={e=>handleBFieldClick(e,3)}>{b3}</button>
    </div>
    <div className='third-row'>
        <button className='tl' onClick={e=>handleAFieldClick(e,2)}>{a2}</button>
        <button  className='tr' onClick={e=>handleBFieldClick(e,2)}>{b2}</button>
    </div>
    <div className='fourth-row'>
        <button className='ftl' onClick={e=>handleAFieldClick(e,1)}>{a1}</button>
        <button className='ftr' onClick={e=>handleBFieldClick(e,1)}>{b1}</button>
    </div>
    <div className='fifth-row'>
        <button  className={btnClassA+' ffl'} onClick={e =>handleAClick(e)}>{a}</button>
        <button  className={btnClassB+' ffr'} onClick={e =>handleBClick(e)}>{b}</button>
    </div>
    <div className='main-row'>
        <button  className={finalButtonClass}  onClick={e =>handleFinalAnswerGuessed(e)}>{finalGuess}</button>
    </div>
    <div className='fifth-row'>
        <button className={btnClassC+' ffl'} onClick={e =>handleCClick(e)}>{c}</button>
        <button className={btnClassD+' ffr'} onClick={e =>handleDClick(e)}>{d}</button>
    </div>
    <div className='fourth-row'>
        <button className='ftl' onClick={e=>handleCFieldClick(e,1)}>{c1}</button>
        <button  className='ftr' onClick={e=>handleDFieldClick(e,1)}>{d1}</button>
    </div>
    <div className='third-row'>
        <button className='tl' onClick={e=>handleCFieldClick(e,2)}>{c2}</button>
        <button  className='tr' onClick={e=>handleDFieldClick(e,2)}>{d2}</button>
    </div>
    <div className='second-row'>
        <button className='sl' onClick={e=>handleCFieldClick(e,3)}>{c3}</button>
        <button  className='sr' onClick={e=>handleDFieldClick(e,3)}>{d3}</button>
    </div>
    <div className='first-row'>
        <button className='fl' onClick={e=>handleCFieldClick(e,4)}>{c4}</button>
        <button className='fr' onClick={e=>handleDFieldClick(e,4)}>{d4}</button>
    </div>
    <img className='logo' src='./logo.jpeg'></img>
    </>
   
  )
}

export default Association