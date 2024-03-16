import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "aos/dist/aos.css"; 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header_nav from './views/header';
import Header from './components/Header';
import Footer from "./components/Footer.js";
import "./styles/index.scss";
import "./styles/small-device.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<Header />
		<Header_nav />
		<Footer />
	</React.Fragment>
);