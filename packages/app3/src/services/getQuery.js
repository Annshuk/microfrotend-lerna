import axios from 'axios'

// const fomtPayload = {
//     "CreDtTm": "",
//     "CtrlSum": "",
//     "Ctry": "",
//     "Nm": "",
//     "NbOfTxs": "",
//     "MsgId": "",
//     "btchBookg": false,
//     "creatorName": "",
//     "financialInit": "",
//     "creditorAccount": "",
//     "paymentID": "",
//     "account": "",
//     "transcationMessage": "",
//     "categoryPurpose": "",
//     "serviceLevel": "",
//     "debitorAccount": "",
//     "requiredExedate": "",
//     "debitorInstId": "",
//     "chargeInfo": "",
//     "paymentInformationID": "",
//     "controlSum": "",
//     "debitorCountry": "Choose...",
//     "debitorName": "",
//     "paymentNoOfTranscation": "",
//     "paymentMethods": ""
// }

const normalizeValues = ({ Document }) => {
    const { GrpHdr, PmtInf } = Document.CstmrCdtTrfInitn;

    const makeDefaultValues = {
        ...GrpHdr,
        ...GrpHdr.InitgPty,
        ...PmtInf
    }
	
	console.log('makeDefaultValues:', makeDefaultValues);
	

    //return Document;
    return makeDefaultValues;
	
}



export const getQuery = async () => {
    const request = await axios.get('mock.json');


    return normalizeValues(request.data);
}

//use reduce