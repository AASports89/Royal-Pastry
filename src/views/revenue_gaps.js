import React from "react";
import Revenue_Gaps from "../components/Revenue_Gaps";
import Calc from '../components/Calc';

export default function Revenue_gaps() {

		return (
			<React.Fragment>
				
				<div id="my-education" className="container-fluid bg-light mt-5">

					<Revenue_Gaps />

					<Calc />
				
				</div>
			
			</React.Fragment>
		);
}