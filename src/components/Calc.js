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
    if(currentNum==='')
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
    <div className="container-fluid bg-light mt-5">
        <h1 id="calc-title">
        <i id="ast-1" className="fa-solid fa-asterisk"></i>Check Your Lab's Revenue Opportunity  <i id="rev" class="fa-solid fa-magnifying-glass-dollar"></i>
      </h1>
  <div className='form-row justify-content-center' id="tablet">

    <div data-aos="slide-right" className='form-row justify-content-center' id='calc-main'>
     
  <div class="card bg-transparent" id="tablet_1">
  
      <div className='form-row justify-content-center'>
        <div className='col-9 justify-content-center' id="title-calc">
        <h5 id="calc-subtitle" className='card-subtitle'>
            <ul data-aos="flip-right" id="ul-1">
            <span id="badge-2" className="badge">
                <img id="icon-ligo-1" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678357113/FLASK_rzukaf.svg" alt="ligo icon"></img>
            </span> 
              <span id="text">Enter the average volume of billing encounters your laboratory typically processes montly or yearly.</span>
            </ul>
            <ul data-aos="flip-left" id="ul-2">
            <span id="badge-2" className="badge">
                <img id="icon-ligo-1" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1678357113/FLASK_rzukaf.svg" alt="ligo icon"></img>
            </span>
                <span id="text">The calculated amount represents the potential revenue increase from the integration of LigoLab™.</span>
            </ul>
            
        </h5>
      </div>
     
     <div className='col-4 justify-content-center' id="calc-form">
        <form className='form-group'>

          <div className='form-row-mb-5' id='calc-disp'>

              <input className='form-control' type="text" id="result" placeholder='Revenue Opportunity' value={'$' + currentSum + ".00"}  readOnly /> 
              <ol id="disclaimer">
                <i id="ast-2" className="fa-solid fa-asterisk"></i>Estimates are based on statistical analysis & automated calculations, therefore in no way are exact, precise, or guaranteed.
            </ol>
   
          </div>
          <div className='form-row-mb-3' id="calc-input">
            <input className='form-control' type="text" id="num" placeholder="Enter monthly or yearly volume..." />
          </div>
          <div className='form-row-mb-3 justify-content-center' id="calc-btns">
            <button id="calc" className='btn btn-light' onClick={Add}>Calculate</button>
            <button id="clear" className='btn btn-light' onClick={Clear}>Reset</button>
          
          </div>
      
        </form>
      </div>
     </div>
  </div>
</div>
  </div>
  </div>
  );
}

export default Clean_Claim_Calc;