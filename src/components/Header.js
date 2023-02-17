import React, {useEffect} from "react";
import Aos from "aos";
import SmoothScrollTo from "../hooks/smoothScrollTo";

import './css/Header.css';

export default function Header() {
	
    useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("#navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}, [])

    return (
		<div>
			<nav data-aos="slide-down"
				id="navbar"
				className="container-fluid navbar">
				<div className="container" id="my-background">
					<a id="main-logo-link"
						href="www.ligolab.com"
						className="home-style navbar-brand"
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth"
							});
						}}>

						<div className="card" id="main-logo">
							<img id="logo" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1676583885/ll_full_logo_eqkc7v.svg" className="card-img-top" alt="ligolab"></img>
						</div>
					</a>
						<div className="navbar-nav" data-aos="slide-down">
							<a onClick={() => SmoothScrollTo("contact-form")} href="#contact-form" id="nav-link" className="btn-style nav-item nav-link">SCHEDULE FREE CONSULTATION</a>
							<a onClick={() => SmoothScrollTo("revenue_gaps")} href="#revenue_gaps" id="nav-link" className="btn-style nav-item nav-link">A SINGLE-SOURCE OF TRUTH</a>
							<a onClick={() => SmoothScrollTo("carousel")} href="#carousel" id="nav-link" className="btn-style nav-item nav-link">LIGOLAB™ PARTNERSHIPS</a>
						</div>
					</div>
			</nav>
			<div id="nav-divider"></div>
		</div>
	);
}