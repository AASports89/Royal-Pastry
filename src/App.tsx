<<<<<<< HEAD
// import React from 'react';
// import logo from './logo.svg';
// import favicon from './images/logo192.svg';
// import './App.css';
// import Aos from 'aos';
// '<resolve className="fallback:">"http": require.resolve</resolve>'
=======
import React from 'react';
import logo from './logo.svg';
import favicon from './images/logo192.svg'
import dessert1 from './images/dessert1.jpg';
import dessert2 from './images/dessert2.jpg';
import dessert3 from './images/dessert3.jpg';
import dessert4 from './images/dessert4.jpg';
import './App.css';
import Aos from 'aos';
// import {v2 as cloudinary} from 'cloudinary';
>>>>>>> 37ea5d7346be26bd07898c32b7c138bda50689fe

// function Main() 
// {

<<<<<<< HEAD
// 		Aos.init({duration:3000});
//     const year = new Date().getFullYear();

//     let image = "";    
//     const submitPostHandler = async (event: { preventDefault: () => void; }) => {
//         event.preventDefault();
//             console.log(image);
//             const cloudinary = require('cloudinary');

//             cloudinary.v2.config({
//               cloud_name: 'dhqsixgmo',
//               api_key: '352941214251788',
//               api_secret: 'Id60xIQQKv8fu4v1IPDhfXg2lRE',
//               secure: true,
//             });
        

//     return (
// <div className="container-fluid">
      
//   <div className='container-fluid'>
//     <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
//       <h1 className="text-hide">
//         <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
//       </h1>
//     </nav>
//     <header className="App-header">
//         <a href="https://reactjs.org" target="_blank"rel="noopener noreferrer"id='link1' data-aos="flip-right">
//           <i id='mag' className="fa-solid fa-magnifying-glass"></i> 
//           Menu
//         </a>
//         <a href="https://reactjs.org"target="_blank" rel="noopener noreferrer"id='link1' data-aos="flip-left">
//         <i id='list' className="fa-solid fa-list"></i>
//           Customization
//         </a>
//     </header>
//   </div>
// <div className='container-fluid'>
//   <figure className="figure" data-aos="flip-right">
//   <div id="inline_container"></div>
//   <button type="button" className="btn btn-primary" onSubmit={submitPostHandler}>Upload</button>
//   </figure>
// </div>
      
   
// <footer className='App-footer'>
// <header className="App-header">
//   <div className="row justify-content-center">
// 		<div className="col-12 justify-content-center" id="footer-div">
//       <div className="row justify-content-md-center">
//        <h1 className='card-header' id='footer-card'>
//        <img id="icon-ligo" src={favicon} alt="Royal Pastry Icon"></img>
//        <p id="footer-title"><b>© Royal Pastry 2006 - {year}</b></p>
//         </h1> 	
          
//       </div>
//       <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
// 				<i data-aos="slide-left" id="footer-font" className="fa-brands fa-square-twitter"></i>
// 			</a> | 	
//       <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
// 				<i data-aos="slide-down" className="fa-brands fa-instagram"></i>
// 			</a> |
//       <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
//       <i data-aos="slide-right" className="fa-brands fa-yelp"></i>
// 			</a>
//   </div>
//   </div>
//   </header>
// </footer>
// </div>
//   );}
// }

// export default Main;
=======
  Aos.init({duration:3000});
  const year = new Date().getFullYear();
  
  return(
    <div className="container-fluid">
      
      <div className="col-12">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
          <div className="col-2 justify-center">
            <h1 className="text-hide">
                <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
            </h1>
          </div>
          <div className="col-10">
            <h2 className="card-header">
              Turning baked goods & sweets from imagination into reality!
              </h2>
          </div>
        </nav>
        <header className="App-header">
          <a data-aos="flip-right" className="nav-link active" href="/">
            <i id='home' className="fa-solid fa-house"></i> 
            Home
          </a>   
          <a data-aos="flip-down" className="nav-link active" href="/addpost">
            <i id='menu' className="fa-regular fa-rectangle-list"></i>
              Menu
          </a>
          <a data-aos="flip-left" className="nav-link active" href="/dashboard">
            <i id='custom' className="fa-solid fa-layer-group"></i>
            Custom Order
            </a>
        </header>
      </div>
  <main className="row justify-content-center">
  <section className="section">
    <div className="columns is-variable is-8">
        <div className="column is-5 is-offset-1">
            <div className="card">
                <h1 className="title has-text-black is-3"><a id="sum" href="/"></a></h1>
                    <img id="sum-img" className="card-img-top" src={dessert1} alt="Card image"></img>
            <div className="card-body">
                <h2 className="subtitle is-5 has-text-grey"></h2>
                    <h6>By: </h6>
                        <p className="has-text-dark"></p>
            </div>
            </div>
        </div>
        <div className="column is-5">
        <div className="card">
                <h1 className="title has-text-black is-3"><a id="sum" href="/"></a></h1>
                    <img id="sum-img" className="card-img-top" src={dessert2} alt="Card image"></img>
            <div className="card-body">
                <h2 className="subtitle is-5 has-text-grey"></h2>
                    <h6>By: </h6>
                        <p className="has-text-dark"></p>
            </div>
            </div>
        </div>
        <div className="column is-5">
        <div className="card">
                <h1 className="title has-text-black is-3"><a id="sum" href="/"></a></h1>
                    <img id="sum-img" className="card-img-top" src={dessert3} alt="Card image"></img>
            <div className="card-body">
                <h2 className="subtitle is-5 has-text-grey"></h2>
                    <h6>By: </h6>
                        <p className="has-text-dark"></p>
            </div>
            </div>
        </div>
        <div className="column is-5">
        <div className="card">
                <h1 className="title has-text-black is-3"><a id="sum" href="/"></a></h1>
                    <img id="sum-img" className="card-img-top" src={dessert4} alt="Card image"></img>
            <div className="card-body">
                <h2 className="subtitle is-5 has-text-grey"></h2>
                    <h6>By: </h6>
                        <p className="has-text-dark"></p>
            </div>
            </div>
        </div>
    </div>
</section>
  </main>

  <footer className='App-footer'>				
      <header className="App-header">
        <div className="row justify-content-md-center">
        <div className="col-12 justify-content-center" id="footer-div">
          <h1 className='card-header' id='footer-card'>
            <img data-aos="slide-up" id="royal-icon" src={favicon} alt="Royal Pastry"></img>
            <p id="footer-title"><b>© Royal Pastry 2019 - {year}. All Rights Reserved.</b></p>
           </h1> 	
         
              <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
                <i id="twitter" data-aos="slide-left" className="fa-brands fa-square-twitter"></i>
              </a> | 	
              <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
                <i id="insta" data-aos="slide-down" className="fa-brands fa-instagram"></i>
              </a> |
              <a className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
                  <i id="yelp" data-aos="slide-right" className="fa-brands fa-yelp"></i>
              </a>
          </div>
        </div>
  </header>
  </footer>
  </div>
// var widget = cloudinary.config({
//         cloud_name: "dhqsixgmo", 
//         upload_preset: "dpfyatxo",
//         stylesheet: '#cloudinary-widget .button.small_button.retry_upload {max-height:10px;} #cloudinary-widget .retry_upload_holder {margin-top:-20px; margin-left:180px;} #cloudinary-widget .file_info {display:none;}#cloudinary-widget .file_name {display:none;} #cloudinary-widget .placeholder_image {width:100px; height:60px;} #cloudinary-widget .image_cover {width:100px; height:60px;} #cloudinary-widget .image_holder {width:100px; height:60px;} #cloudinary-widget .error {float:left; font-size:9pt;} #cloudinary-widget .panel.progress .thumbnails {width:290px; height:100px;} #cloudinary-widget .panel.progress .thumbnails .thumbnail {margin:0px; padding:0px; background-color:#232323; position:relative; top:0px; left:0px; width:60px; height:60px; float:left;} #remote_url {margin-top:-45px;} #cloudinary-navbar {-moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget {max-width:422px; background:transparent; border:0px; -moz-border-radius: 0px -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget .drag_area {margin:5px; max-width:300px;} #cloudinary-navbar .close {display:none;} #cloudinary-overlay {background-color: transparent;} #cloudinary-navbar .source {clear: left} #cloudinary-navbar {float:left;} #cloudinary-widget {float:left;} span.or {max-height:10px; display:block; margin-top:-30px;} #cloudinary-widget .button, #cloudinary-widget .button.small_button {max-width:75px; max-height:10px; font-size:11pt; padding:13px; margin-top:-15px; margin-left:40px;} #cloudinary-widget .panel.local .drag_area .drag_content .label {font-size:14pt; margin-top:-85px; max-height:85px;} div.panel.local.active {height:140px; padding:5px; overflow-y:hidden;} #cloudinary-widget {background-color: #232323; max-height:240px; margin-left:-0px;} #cloudinary-widget .drag_area {margin-top:3px; max-height:100px; background:#2C2C2C; border: 2px dashed #168BD6;} #cloudinary-navbar .source .label {color:white;} .widget .panel.progress .thumbnails .thumbnail .image{display:none} #cloudinary-widget .image_cover { background: url(http://techdefencelabs.com/public/img/loading.gif); background-size: 98px 60px;} .drag_area img {display:none;}', inline_container: '#inline_container', sources: ['local','url'],
//         api_key: '352941214251788', 
//         api_secret: 'Id60xIQQKv8fu4v1IPDhfXg2lRE'
// });

// widget.openUploadWidget({   cloud_name: "dhqsixgmo", 
// upload_preset: "dpfyatxo",
// stylesheet: '#cloudinary-widget .button.small_button.retry_upload {max-height:10px;} #cloudinary-widget .retry_upload_holder {margin-top:-20px; margin-left:180px;} #cloudinary-widget .file_info {display:none;}#cloudinary-widget .file_name {display:none;} #cloudinary-widget .placeholder_image {width:100px; height:60px;} #cloudinary-widget .image_cover {width:100px; height:60px;} #cloudinary-widget .image_holder {width:100px; height:60px;} #cloudinary-widget .error {float:left; font-size:9pt;} #cloudinary-widget .panel.progress .thumbnails {width:290px; height:100px;} #cloudinary-widget .panel.progress .thumbnails .thumbnail {margin:0px; padding:0px; background-color:#232323; position:relative; top:0px; left:0px; width:60px; height:60px; float:left;} #remote_url {margin-top:-45px;} #cloudinary-navbar {-moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget {max-width:422px; background:transparent; border:0px; -moz-border-radius: 0px -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget .drag_area {margin:5px; max-width:300px;} #cloudinary-navbar .close {display:none;} #cloudinary-overlay {background-color: transparent;} #cloudinary-navbar .source {clear: left} #cloudinary-navbar {float:left;} #cloudinary-widget {float:left;} span.or {max-height:10px; display:block; margin-top:-30px;} #cloudinary-widget .button, #cloudinary-widget .button.small_button {max-width:75px; max-height:10px; font-size:11pt; padding:13px; margin-top:-15px; margin-left:40px;} #cloudinary-widget .panel.local .drag_area .drag_content .label {font-size:14pt; margin-top:-85px; max-height:85px;} div.panel.local.active {height:140px; padding:5px; overflow-y:hidden;} #cloudinary-widget {background-color: #232323; max-height:240px; margin-left:-0px;} #cloudinary-widget .drag_area {margin-top:3px; max-height:100px; background:#2C2C2C; border: 2px dashed #168BD6;} #cloudinary-navbar .source .label {color:white;} .widget .panel.progress .thumbnails .thumbnail .image{display:none} #cloudinary-widget .image_cover { background: url(http://techdefencelabs.com/public/img/loading.gif); background-size: 98px 60px;} .drag_area img {display:none;}', inline_container: '#inline_container', sources: ['local','url'],
// api_key: '352941214251788', 
// api_secret: 'Id60xIQQKv8fu4v1IPDhfXg2lRE'
// });

);
}

export default App;
>>>>>>> 37ea5d7346be26bd07898c32b7c138bda50689fe
