import React from "react";
import Main_Content from "../components/Main_Content";
import Form from "../components/Form";

export default function Main() {
	return (
		<React.Fragment>
			<div className="container-fluid bg-light mt-5" id="main-container">
				<Main_Content />

				<Form />
			</div>
		</React.Fragment>
	);
}