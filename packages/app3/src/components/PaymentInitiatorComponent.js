import React, { useState, forwardRef, useImperativeHandle } from 'react';



const PaymentInitiatorComponent = forwardRef((props, ref) => {

	// Declare a new state variable, which we'll call "count"
	const [CreDtTm, setCreDtTm] = useState("2022-11-29T01:36");
	const [CtrlSum, setCtrlSum] = useState("50001");
	const [Ctry, setCtry] = useState("India");
	const [Nm, setNm] = useState("Initiators Name");
	const [NbOfTxs, setNbOfTxs] = useState("2");
	const [MsgId, setMsgId] = useState("Message-ID-1799566");

	var data = {
		"CreDtTm": CreDtTm,
		"CtrlSum": CtrlSum,
		"InitgPty": {
			"PstlAdr": {
				"Ctry": Ctry
			},
			"Nm": Nm
		},
		"NbOfTxs": NbOfTxs,
		"MsgId": MsgId
	};


	const handleOnChange_Date = (event) => {
		setCreDtTm(event.target.value);
	};

	const handleOnChange_CtrlSum = (event) => {
		setCtrlSum(event.target.value);
	};

	const handleOnChange_Ctry = (event) => {
		setCtry(event.target.value);
	};

	const handleOnChange_Nm = (event) => {
		setNm(event.target.value);
	};

	const handleOnChange_NbOfTxs = (event) => {
		setNbOfTxs(event.target.value);
	};

	const handleOnChange_MsgId = (event) => {
		setMsgId(event.target.value);
	};


	useImperativeHandle(ref, () => ({
		getData: () => {
			return data;
		}
	}));

	return (
		<div >
			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="CreDtTm">Credit Transaction Date</label>
					<input type="datetime-local" className="form-control" name="CreDtTm" id="CreDtTm" placeholder="Date" value={ CreDtTm } onChange={ handleOnChange_Date } />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="CtrlSum">Transaction Control Sum</label>
					<input type="text" className="form-control" id="CtrlSum" name="CtrlSum" placeholder="Control Sum value" value={ CtrlSum } onChange={ handleOnChange_CtrlSum } />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<label className="input-group-text" for="Ctry">Payment Initiator Country</label>
						</div>
						<select className="custom-select" id="Ctry" name="Ctry" value={ Ctry } onChange={ handleOnChange_Ctry }>
							<option selected>Choose...</option>
							<option value="1">India</option>
							<option value="2">US</option>
							<option value="3">UK</option>
						</select>
					</div>
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="Nm">Payment Initiator Name</label>
					<input type="text" className="form-control" id="Nm" name="Nm" value={ Nm } onChange={ handleOnChange_Nm } />
				</div>
			</div>

			<div className="row">
				<div className="form-group col-md-6 p-2">
					<label for="NbOfTxs">Number of Transactions</label>
					<input type="number" className="form-control" id="NbOfTxs" name="NbOfTxs" placeholder="" value={ NbOfTxs } onChange={ handleOnChange_NbOfTxs } />
				</div>
				<div className="form-group col-md-6 p-2">
					<label for="MsgId">Transaction Message ID</label>
					<input type="text" className="form-control" id="MsgId" name="MsgId" placeholder="" value={ MsgId } onChange={ handleOnChange_MsgId } />
				</div>
			</div>

		</div>
	);

});

//export default PaymentInitiatorComponent;
export default React.memo(PaymentInitiatorComponent);