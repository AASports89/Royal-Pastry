import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "aos/dist/aos.css"; 
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header_nav from './views/header';
import Header from './components/Header';
import Footer from "./components/Footer.js";
import Main from './views/main';
import Revenue_gaps from './views/revenue_gaps';
import Project from './views/carousel';
import Body_View from './views/body';
import "./styles/index.scss";
import "./styles/small-device.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<Header />
		<Header_nav />
		<Main />
		<Revenue_gaps />
		<Body_View />
		<Project />
		<Footer />
	</React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
