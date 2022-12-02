import React, { useState } from 'react';



const HelloWorld = () => <div>This is single line component</div>;

const Forms = () => {
	const [change, setChange] = useState(true);
	return (
		<div >
			<div className="container">
				<form>

					<br />
					<div><b>Customer Credit Transfer Details</b></div>
					<br />

					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Credit Transaction Date</label>
							<input type="datetime-local" className="form-control" id="inputEmail4" placeholder="Date" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Transaction Control Sum</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="Control Sum value" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-6">
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<label className="input-group-text" for="inputGroupSelect01">Payment Initiator Country</label>
								</div>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Choose...</option>
									<option value="1">India</option>
									<option value="2">US</option>
									<option value="3">UK</option>
								</select>
							</div>
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Payment Initiator Name</label>
							<input type="text" className="form-control" id="inputPassword4" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Number of Transactions</label>
							<input type="number" className="form-control" id="inputEmail4" placeholder="" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Transaction Message ID</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="" />
						</div>
					</div>

					<br />
					<div><b>Creditor Details</b></div>
					<br />

					<div className="row">
						<div className="form-group col-md-12">
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
						<div className="form-group col-md-6">
							<label for="inputEmail4">Creditor Name</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Financial Institution Id</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="BICFI" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Creditor Account</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="IBAN" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Payment ID</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="End To End transaction Id" />
						</div>
					</div>


					<div className="row">
						<div className="form-group col-md-6">
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
						<div className="form-group col-md-6">
							<label for="inputPassword4">Remittance Information</label>
							<input type="text" className="form-control" id="inputPassword4" readonly placeholder="Unstructured Remittance Information" />
						</div>
					</div>


					<br />
					<div><b>Payment Information</b></div>
					<br />

					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Category Purpose</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="Payment Purpose" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Service Level</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="End To End transaction Id" />
						</div>
					</div>



					<br />
					<div><b>Debitor  Details</b></div>
					<br />

					<div className="row">
						<div className="form-group col-md-12">
							<label for="inputEmail4">Debitor Account</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="IBAN" />
						</div>
					</div>



					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Required Execution Date</label>
							<input type="date" className="form-control" id="inputEmail4" placeholder="Date" />
						</div>

						<div className="form-group col-md-6">
							<label for="inputPassword4">Debitor Financial Institution Id</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="BICFI" />
						</div>

					</div>

					<div className="row">
						<div className="form-group col-md-12">
							<label for="inputEmail4">Charge Info</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="SLEV" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-12">
							<label for="inputEmail4">Payment Information ID</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="Payment Information ID" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-12">
							<label for="inputEmail4">Control Sum</label>
							<input type="text" className="form-control" id="inputEmail4" placeholder="1500.00" />
						</div>
					</div>

					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Debitor Country</label>
							<select className="custom-select" id="inputGroupSelect01">
								<option selected>Choose...</option>
								<option value="1">India</option>
								<option value="2">US</option>
								<option value="3">UK</option>
							</select>
						</div>

						<div className="form-group col-md-6">
							<label for="inputPassword4">Debitor Name</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="Debitor Name" />
						</div>

					</div>


					<div className="row">
						<div className="form-group col-md-6">
							<label for="inputEmail4">Number of Transactions</label>
							<input type="number" className="form-control" id="inputEmail4" placeholder="" />
						</div>
						<div className="form-group col-md-6">
							<label for="inputPassword4">Payment Methods</label>
							<input type="text" className="form-control" id="inputPassword4" placeholder="" />
						</div>
					</div>

					<br /><br />
					<button type="submit" className="btn btn-primary">Submit</button>
					<br /><br />

				</form>
			</div>
		</div>
	);
}
export default Forms;