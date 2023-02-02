import React from "react";
import Revenue_Gaps from "../components/Revenue_Gaps";
import Body from "../components/Body";

export default function Revenue_gaps() {

		return (
			<React.Fragment>
				<div id="my-education" className="container-fluid bg-light mt-5">
					<div className="education-container container bg-light pb-5">

						<Revenue_Gaps />

						<Body />
						
					</div>
				</div>

			</React.Fragment>
		);
}