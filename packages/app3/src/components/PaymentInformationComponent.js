import React, { useState } from 'react';



import CreditTransferInformationComponent from './CreditTransferInformationComponent';

const PaymentInformationComponent = () => {

	return (
		<div>
			<div className="p-2"><b>Creditor Details</b></div>
			<CreditTransferInformationComponent />
			<div className="p-2"><b>Payment Information</b></div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Category Purpose</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="Payment Purpose" />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Service Level</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="End To End transaction Id" />
				</div>
			</div>


			<div className="p-2"><b>Debitor  Details</b></div>

			<div className="row">
				<div className="form-group col-md-12 p-2">
					<label for="inputEmail4">Debitor Account</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="IBAN" />
				</div>
			</div>



			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Required Execution Date</label>
					<input type="date" className="form-control" id="inputEmail4" placeholder="Date" />
				</div>

				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Debitor Financial Institution Id</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="BICFI" />
				</div>

			</div>

			<div className="row">
				<div className="form-group col-md-12 p-2">
					<label for="inputEmail4">Charge Info</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="SLEV" />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-12 p-2">
					<label for="inputEmail4">Payment Information ID</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="Payment Information ID" />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-12 p-2">
					<label for="inputEmail4">Control Sum</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="1500.00" />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Debitor Country</label>
					<select className="custom-select" id="inputGroupSelect01">
						<option selected>Choose...</option>
						<option value="1">India</option>
						<option value="2">US</option>
						<option value="3">UK</option>
					</select>
				</div>

				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Debitor Name</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="Debitor Name" />
				</div>

			</div>


			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Number of Transactions</label>
					<input type="number" className="form-control" id="inputEmail4" placeholder="" />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Payment Methods</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="" />
				</div>
			</div>

		</div>
	);
};

export default PaymentInformationComponent;