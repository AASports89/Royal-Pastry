import React,{ Component } from 'react';
import "./css/Monitor.css";

class Monitor extends Component {

    render() {
        return (

<div className="container-fluid bg-light mt-5" id="monitor">

    <h1 className="card-header" id="h3">Customizable, Scalable & Adaptable RCM Solutions</h1>
    <div className="row justify-content-center">
        <div data-aos="flip-right" id='check-col' className="col-4 justify-content-center">
            <h2 id="check-list-title-1">Payment Posting Services</h2>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-signs-post"></i> - Insurance Eligibility & Address Verification</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-signs-post"></i> - CPT Code Focused Payment Posting</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-signs-post"></i> - Charge Capture Verification</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-signs-post"></i> - Accurate Claim Submissions On the First Time</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-signs-post"></i> - Payer Directed Rule Configuration</ul>
        </div>
        <div data-aos="flip-down" id='check-col' className="col-4 justify-content-center">
            <h2 id="check-list-title-1">Reimbursement & Payer Management</h2>
            <ul id="check-row-1"><i id="final-check-1" className="fa-regular fa-credit-card"></i> - EOB Follow-Up Protocols</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-regular fa-credit-card"></i> - Denial & Appeal Management</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-regular fa-credit-card"></i> - Insurance Regulatory Compliance</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-regular fa-credit-card"></i> - Unpaid Claim Re-Adjudication</ul>
            <ul id="check-row-1"><i id="final-check-1" className="fa-regular fa-credit-card"></i> - Payer-Specific Follow-Up Strategies</ul>
        </div>
        <div data-aos="flip-left" id='check-col' className="col-4 justify-content-center">
            <h2 id="check-list-title-1">Patient-Centric Services</h2>
            <ul id="check-row-1"><i id="final-check-1" className="fa-solid fa-print"></i> - Branded Online Payment Portal</ul>
            <ul id="check-row-1"><i id="final-check-1" class="fa-solid fa-print"></i> - Paper & Electronic Statements</ul>
            <ul id="check-row-1"><i id="final-check-1" class="fa-solid fa-print"></i> - Delinquent Notices </ul>
            <ul id="check-row-1"><i id="final-check-1" class="fa-solid fa-print"></i> - Simple Refund Management</ul>
            <ul id="check-row-1"><i id="final-check-1" class="fa-solid fa-print"></i> - Regular Follow-Up Messages</ul>
        </div>
    </div>
</div>
)}};
export default Monitor;