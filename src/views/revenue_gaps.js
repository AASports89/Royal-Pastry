import React from "react";
import Revenue_Gaps from "../components/Revenue_Gaps";
import Calc from "../components/Calc";

export default function Revenue_gaps() {

		return (
			<React.Fragment>
				<div className="container" id="divider-1"></div>
				
					<Revenue_Gaps />
			
				<div className="container" id="divider-1"></div>

					<Calc />
					
				<div className="container" id="divider-1"></div>
			</React.Fragment>
		);
}