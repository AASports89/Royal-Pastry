import React from "react";
import Revenue_Gaps from "../components/Revenue_Gaps";
import Calc from "../components/Calc";

export default function Revenue_gaps() {

		return (
			<React.Fragment>
				<div className="container" id="divider-1"></div>
				<div id="my-education" className="container-fluid bg-light mt-5">
					<Revenue_Gaps />
				</div>
				<div className="container" id="divider-1"></div>
				<div className="container-fluid bg-light mt-5">
					<Calc />
				</div>
				<div className="container" id="divider-1"></div>
			</React.Fragment>
		);
}