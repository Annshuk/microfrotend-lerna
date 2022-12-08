
import axios from 'axios';

const makePayload = ({
    CreDtTm = "2022-09-14T09:30",
    CtrlSum = "50000",
    Ctry = "India",
    Nm = "Initiators Name",
    NbOfTxs = 2,
    MsgId = "unique-Message-ID-1799566",
    BtchBookg = true,
    creatorName = "Creditor Name",
	financialInit = "SPUEUS2UXXX",
	creditorAccount = "DE21500500009876543210",
	paymentID = "OriginatorID1234",
	account ="2543.44",
	transcationMessage = "Unstructured Remittance Information",
	categoryPurpose = "SAL",
	serviceLevel = "SEPA",
	debitorAccount = "DE87200500001234567890",
	requiredExedate = "2010-11-25",
	debitorInstId = "BANKUSFFXXX",
	chargeInfo = "SLEV",
	paymentInformationID = "Payment-Information-ID-48133",
	controlSum = "1500.00",
	debitorCountry = "India",
	debitorName = "John",
	paymentNoOfTranscation = 2,
	paymentMethods = "TRF" 
	}) => {
		
    return {
			"Body": {	
			  Document: {
				CstmrCdtTrfInitn: {
					GrpHdr: {
						CreDtTm,
						CtrlSum,
						InitgPty: {
							PstlAdr: {
								Ctry
							},
							Nm
						},
						NbOfTxs,
						MsgId
					},
					PmtInf: {
						"BtchBookg": BtchBookg,
						"CdtTrfTxInf": [
							{
								"Cdtr": {
									"Nm":  creatorName
								},
								"CdtrAgt": {
									"FinInstnId": {
										"BICFI": financialInit
									}
								},
								"CdtrAcct": {
									"Id": {
										"IBAN": creditorAccount
									}
								},
								"PmtId": {
									"EndToEndId": paymentID
								},
								"Amt": {
									"InstdAmt": {
										"#text": account,
										"-Ccy": "EUR"
									}
								},
								"RmtInf": {
									"Ustrd": transcationMessage
								}
							}
						],

						"PmtTpInf": {
							"CtgyPurp": {
								"Cd": categoryPurpose
							},

							"SvcLvl": {
								"Cd": serviceLevel
							}
						},

						"DbtrAcct": {
							"Id": {
								"IBAN": debitorAccount
							}
						},

						"ReqdExctnDt": requiredExedate,

						"DbtrAgt": {
							"FinInstnId": {
								"BICFI": debitorInstId
							}
						},

						"ChrgBr": chargeInfo,

						"PmtInfId": paymentInformationID,

						"CtrlSum": controlSum,

						"Dbtr": {
							"PstlAdr": {
								"Ctry": debitorCountry
							},

							"Nm": debitorName
						},

						"NbOfTxs": paymentNoOfTranscation,

						"PmtMtd": paymentMethods
					}
				}
			}		
		}
		}
        
    
}

/* Async code
export const postQuery = async (payload) => {
    const data = makePayload(payload)
    try {
        //const request = await axios.post('http://ec2-18-236-230-212.us-west-2.compute.amazonaws.com:5000/api/workflow/payment_orchestration', data);
        const request = await axios.post('https://ja4d9gh6aj.execute-api.us-west-2.amazonaws.com/Dev1/jsonconductor', data);
        return request
    } catch (error) {
        return new Error(error)
    }
}*/


export const postQuery = (payload) => {
    const data = makePayload(payload)
    return axios.post('https://ja4d9gh6aj.execute-api.us-west-2.amazonaws.com/Dev1/jsonconductor', data);
}