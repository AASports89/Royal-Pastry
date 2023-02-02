import React,{ Component } from 'react';
import './css/Carousel.css';

class Carousel extends Component {

render() {

  return (
   
    <div data-aos="zoom-in" className="component-container justify-content center" id="carousel">
       <div class="col-8 justify-content-center">

        <h3 class="card-header" id="h6">We Value All Our Partnerships Across the Entire U.S.</h3>

    <div id="carousel-demo"
         class="carousel slide"
         data-ride="carousel">
        <div class="carousel-inner" id="carousel-inner">
            <div class="item">
                <div id="carousel-caption-1" class="carousel-caption">Eastern Connecticut Pathology Consultants (ECPC) - Tripled its productivity and increased its net collections by <strong>35%</strong>.</div>
                    <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675220587/LigoLab_Template_Scratch_22_cjhdnl.svg" alt="ECPC"></img>
            </div>

            <div class="item">
                <div id="carousel-caption-2" class="carousel-caption">North West Pathology (NWP) - LigoLab™ partnered with the northwest pacific giant laboratory group to help stop the revenue from slipping through the cracks, potentially saving millions in revenue.</div>
                <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675159178/LigoLab_Template_Scratch_12_xdeqtu.svg" alt="NWP"></img>
            </div>

            <div class="item">
                <div id="carousel-caption-3" class="carousel-caption">Throughout the decades LigoLab™ has been able to establish countless successful partnerships with exceptional results, growth, and innovation. </div>
                <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675159552/LigoLab_Template_Scratch_13_ldfv8v.svg" alt="Our Credentials"></img>
            </div>

            <div class="item active">
              <div id="carousel-caption-4" class="carousel-caption">Visit <i id="ligo-site"><a id="link" href="www.ligolab.com">www.LigoLab.com</a></i> to hear about all the successful and fruitful partnerships formed throughout the years.</div>
                <img src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675216187/LigoLab_Template_Scratch_18_mifnzh.svg"></img>
            </div>
        </div>

        <a class="left carousel-control"
           href="#carousel-demo"
           data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left">
        </span>
        </a>
        <a class="right carousel-control"
           href="#carousel-demo"
           data-slide="next">
            <span class="glyphicon glyphicon-chevron-right">
        </span>
        </a>
    </div>
</div>
</div>
  );
}
}

export default Carousel;