import React,{ Component } from 'react';
import './css/Revenue_Gaps.css';

const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );

// The animation function, which takes an Element
const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	// Start the animation running 60 times per second
	const counter = setInterval( () => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad( frame / totalFrames );
		// Use the progress value to calculate the current count
		const currentCount = Math.round( countTo * progress );

		// If the current count has changed, update the element
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
	const countupEls = document.querySelectorAll( '.countup' );
	countupEls.forEach( animateCountUp );
};
console.log(runAnimations());

class Revenue_Gaps extends Component {

    // How long you want the animation to take, in ms

render() {

  return (

<div className="component-container" id="revenue_gaps">

    <h1 className="card-header" id="h1">Identify Revenue Stream Gaps & Opportunities</h1>

<div className="container" id="divider-1"></div>

<div className="row justify-content-center">
    <div data-aos="slide-right" className="col-5">
      
        <h5 className="card-title" id="check-title">
            Your free consultation will give you an inside look into your revenue cycle and provide you with actionable next steps to:
        </h5>
               <div className="col-12" id="check-list">

                <p id='checking'>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Maximize First-Pass Ratios</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Decrease A/R Days Across the Board</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Eliminate Billing Errors, While Increasing Volume</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Streamline Operational Workflow Tasks</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Automate Repetitive Billing Functions</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Customize Analytics for Productivity & KPI Tracking</ul>
                    <ul><i id="check" className="fa-solid fa-list-check"></i> - Transition Billing From a "Back-End" To a "Front-End" Process</ul>
                </p>
                   
                   <div className="form-row justify-content-md-center">
                       <a id="submit-5" className="btn btn-primary" href="#contact-form">Schedule Free Consultation</a>
                </div>
        </div>
    </div>

    <div data-aos="slide-left" className="col-7" id='gap'>
        <div className="card border-0" id="gaps">
            <img className="img-responsive" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1675218976/LigoLab_Template_Scratch_21_vrybla.svg" alt="gaps"></img>
        </div>
    </div>

<div data-aos="zoom-in" className="container" id="stats-div">
    <div className="row" id="stats-row">
        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-chart-pie"></i></h1>
                    <p className="card-text" id="stats"><span class="countup">98</span>% Clean Claims First-Pass Rate</p>
            </div>
        </div>

        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-sack-dollar"></i></h1>
                    <p className="card-text" id="stats"><span class="countup">30</span>% Higher Net Collections</p>
            </div>
        </div>

        <div className="col-4">
            <div className="card text-center" id="stats-div-1">
                <h1 className="card-title"><i id="clean-claim" class="fa-solid fa-chart-line"></i></h1>
                    <p className="card-text" id="stats">Average of <span class="countup">31</span>% Revenue Growth</p>
            </div>
        </div>
    </div>
</div>
</div>

     <div className="container" id="divider-1"></div>

</div>

  );
}
}

export default Revenue_Gaps;