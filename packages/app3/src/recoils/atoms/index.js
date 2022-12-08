import {  atom} from 'recoil';
import uuid from 'react-uuid';

export const appState = atom({
	  key: 'appState', // unique ID (with respect to other atoms/selectors)
	  default: {
		CreDtTm : "2022-09-14T09:30",
		CtrlSum :"50000",
		Ctry: "India",
		Nm : "Initiators Name",
		NbOfTxs : 2,
		MsgId : uuid(),
		BtchBookg: true,
		creatorName : "Creditor Name",
		financialInit : "SPUEUS2UXXX",
		creditorAccount : "DE21500500009876543210",
		paymentID : "OriginatorID1234",
		account :"2543.44",
		transcationMessage : "Unstructured Remittance Information",
		categoryPurpose : "SAL",
		serviceLevel : "SEPA",
		debitorAccount : "DE87200500001234567890",
		requiredExedate : "2010-11-25",
		debitorInstId : "BANKUSFFXXX",
		chargeInfo : "SLEV",
		paymentInformationID : "Payment-Information-ID-48133",
		controlSum : "1500.00",
		debitorCountry : "India",
		debitorName : "John",
		paymentNoOfTranscation : 2,
		paymentMethods : "TRF" 
	}
});