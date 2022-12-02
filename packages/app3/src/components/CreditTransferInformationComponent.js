import React, { useState } from 'react';


const CreditTransferInformationComponent = () => {

	return (
		<div >
			<div className="row">
				<div className="form-group col-md-12 p-2">
					<label for="inputEmail4">Batch Booking</label>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<input type="checkbox" aria-label="Checkbox for following text input" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Creditor Name</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="" />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Financial Institution Id</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="BICFI" />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Creditor Account</label>
					<input type="text" className="form-control" id="inputEmail4" placeholder="IBAN" />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Payment ID</label>
					<input type="text" className="form-control" id="inputPassword4" placeholder="End To End transaction Id" />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="inputEmail4">Amount</label>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">$</span>
						</div>
						<input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
						<div className="input-group-append">
							<span className="input-group-text">.00</span>
						</div>
					</div>

				</div>
				<div className="form-group col-md-6 p-2">
					<label for="inputPassword4">Remittance Information</label>
					<input type="text" className="form-control" id="inputPassword4" readonly placeholder="Unstructured Remittance Information" />
				</div>
			</div>
		</div>
	);
};

export default CreditTransferInformationComponent;