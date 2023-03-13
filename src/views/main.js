import React from "react";
import Main_Content from "../components/Main_Content";
import Form from "../components/Form";

export default function Main() {
	return (
		<div id="main-container" className="container-fluid bg-light mt-5">
			<Main_Content />

			<Form />
		</div>
	);
}