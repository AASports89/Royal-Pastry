import React from 'react';
import logo from './logo.svg';
import favicon from './images/logo192.svg';
import './App.css';
import Aos from 'aos';
'<resolve className="fallback:">"http": require.resolve</resolve>'


function Main() 
{

		Aos.init({duration:3000});
    const year = new Date().getFullYear();

    let image = "";    
    const submitPostHandler = async (event) => {
        event.preventDefault();
            console.log(image);
            const cloudinary = require('cloudinary');

            cloudinary.v2.config({
              cloud_name: 'dhqsixgmo',
              api_key: '352941214251788',
              api_secret: 'Id60xIQQKv8fu4v1IPDhfXg2lRE',
              secure: true,
            });
        

    return (
<div className="container-fluid">
      
  <div className='container-fluid'>
    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
      <h1 className="text-hide">
        <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
      </h1>
    </nav>
    <header className="App-header">
        <a href="https://reactjs.org" target="_blank"rel="noopener noreferrer"id='link1' data-aos="flip-right">
          <i id='mag' className="fa-solid fa-magnifying-glass"></i> 
          Menu
        </a>
        <a href="https://reactjs.org"target="_blank" rel="noopener noreferrer"id='link1' data-aos="flip-left">
        <i id='list' className="fa-solid fa-list"></i>
          Customization
        </a>
    </header>
  </div>
<div className='container-fluid'>
  <figure className="figure" data-aos="flip-right">
  <div id="inline_container"></div>
  <button type="button" className="btn btn-primary" onSubmit={submitPostHandler}>Upload</button>
  </figure>
</div>
      
   
<footer className='App-footer'>
<header className="App-header">
  <div className="row justify-content-center">
		<div className="col-12 justify-content-center" id="footer-div">
      <div className="row justify-content-md-center">
       <h1 className='card-header' id='footer-card'>
       <img id="icon-ligo" src={favicon} alt="Royal Pastry Icon"></img>
       <p id="footer-title"><b>© Royal Pastry 2006 - {year}</b></p>
        </h1> 	
          
      </div>
      <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
				<i data-aos="slide-left" id="footer-font" className="fa-brands fa-square-twitter"></i>
			</a> | 	
      <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
				<i data-aos="slide-down" className="fa-brands fa-instagram"></i>
			</a> |
      <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
      <i data-aos="slide-right" className="fa-brands fa-yelp"></i>
			</a>
  </div>
  </div>
  </header>
</footer>
</div>
  );}
}

export default Main;