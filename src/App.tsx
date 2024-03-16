import React, {useEffect} from 'react';
import logo from './logo.svg';
import cake1 from './images/cake_bg.svg'
import favicon from './images/logo192.svg'
import './App.css';
import Aos from 'aos';
import { render } from '@testing-library/react';

function App() {

Aos.init({duration:3000});
const year = new Date().getFullYear();
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
				<h1 className='text-hide' id="place-holder">
				</h1> 
			</div>
			<footer className='App-footer'>
				
<header className="App-header">
	<div className="row justify-content-center">
		<div className="col-12 justify-content-center" id="footer-div">
			<div className="row justify-content-md-center">
				<h1 className='card-header' id='footer-card'>
					<img data-aos="slide-up" id="royal-icon" src={favicon} alt="Royal Pastry"></img>
					<p id="footer-title"><b>© Royal Pastry 2019 - {year}. All Rights Reserved.</b></p>
				</h1> 	
			</div>
			<div className="row justify-content-md-center">
				<a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
				<i id="twitter" data-aos="slide-left" id="footer-font" className="fa-brands fa-square-twitter"></i>
				</a> | 	
      				<a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
				<i id="insta" data-aos="slide-down" className="fa-brands fa-instagram"></i>
				</a> |
      				<a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
      				<i id="yelp" data-aos="slide-right" className="fa-brands fa-yelp"></i>
				</a>
			</div>
		</div>
	</div>
</header>
			</footer>
		</div>
	);}
export default App;
