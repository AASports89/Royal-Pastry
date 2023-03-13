import React,{ Component } from 'react';
import './css/Body.css';

class Body extends Component {

render() {

  return (

<div className="container-fluid bg-light mt-5" id='compliance'>
    <h1 className="card-header" id="h4">Maximize Revenue Capture Through Exceptional Compliance</h1>
    
    <div className="col-12 justify-content-center" data-aos="zoom-out" data-aos-anchor-placement="center" >
        <p id="award-text">
            In today's strict regulatory compliance landscape, establishing an efficient workflow & optimized revenue cycle isn't enough:
                <li id='award-line'>
                    All streamlined operational processes & innovative billing methods 
                    are anchored to security, transparency & accuracy. 
                </li>
                <li id='award-line-1'>
                    LigoLab™ practices regular internal review of regulatory 
                    compliance guidelines, while striving to further develop it's
                    operating platform's infrastructure ensuring every claim is
                    processed accurately, rapidly & securely.
                </li>
        </p>
    </div>
</div>

)}};

export default Body;