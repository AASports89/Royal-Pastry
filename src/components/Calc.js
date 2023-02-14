import React,{useState, useEffect} from 'react';
import './css/Calc.css';

function Clean_Claim_Calc() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= (currentNum)*41;
    setCurrentSum(sum);
    document.querySelector('#num').value=" ";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    console.log('sum:', currentSum);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
<div data-aos="slide-right" className='row justify-content-center' id="calc-main">
    
    <div className='col-5 justify-content-center' id="title-calc">
        <h1 id="calc-title" className='card-title'>
            View Revenue Opportunity Amount  <i id="rev" class="fa-solid fa-magnifying-glass-dollar"></i>
        </h1>
        <h5 id="calc-subtitle" className='card-subtitle'>
            <ul>
            <span id="badge-1" data-aos="zoom-in-right" className="badge">
                <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675882601/ligo_logo_k9avxm.svg" alt="ligo icon"></img>
            </span> 
            Enter the average volume of billing encounters and/or claims your laboratory processes per month or year.
            </ul>
            <ul>
            <span id="badge-1" data-aos="zoom-in-right" className="badge">
                <img id="icon-ligo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675882601/ligo_logo_k9avxm.svg" alt="ligo icon"></img>
            </span>
                The calculated number represents the potential revenue opportunity with the integration of LigoLab™ into laboratory operations.
            </ul>
            
        </h5>
    </div>
     
     <div className='col-2' id="calc-form">
     <form className='form-group'>
        <div className='form-row-mb-5' id='calc-disp'>
            <input className='form-control' type="text" id="result" placeholder='Rev. Op.' value={'$' + currentSum}  readOnly />   
        </div>
        <div className='form-row-mb-3' id="calc-input">
            <input className='form-control' type="text" id="num" placeholder="Enter vol..." />
        </div>
        <div className='form-row-mb-3' id="calc-btns">
            <button id="calc" className='btn btn-light' onClick={Add}>Calculate</button>
            <button id="clear" className='btn btn-light' onClick={Clear}>Reset</button>
        </div>
        <div className='col-12'>
            <ol id="disclaimer">
            <i id="ast" className="fa-solid fa-asterisk"></i>Estimates are based on average statistics & automated calculations, in no way are exact, precise, or guaranteed.
            </ol>
        </div>
       

    </form>

     </div>
       
     
        
    </div>
  );
}

export default Clean_Claim_Calc;