
import axios from 'axios';

const makePayload = ({
    CreDtTm = "2022-09-14T09:30:47.000Z",
    CtrlSum = "50000",
    Ctry = "India",
    Nm = "Initiators Name",
    NbOfTxs = 2,
    MsgId = "unique-Message-ID-1799566",
    btchBookg = "true",
    creatorName = "",
    financialInit = "",
    creditorAccount = "",
    paymentID = "",
    account = "",
    transcationMessage = "",
    categoryPurpose = "",
    serviceLevel = "",
    debitorAccount = "",
    requiredExedate = "",
    debitorInstId = "",
    chargeInfo = "",
    paymentInformationID = "",
    controlSum = "",
    debitorCountry = "",
    debitorName = "",
    paymentNoOfTranscation = "",
    paymentMethods = "" }) => {
    return {
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
                    BtchBookg: btchBookg,
                    "CdtTrfTxInf": [
                        {
                            "Cdtr": {
                                "Nm": "Creditor Name"
                            },
                            "CdtrAgt": {
                                "FinInstnId": {
                                    "BICFI": "SPUEUS2UXXX"
                                }
                            },
                            "CdtrAcct": {
                                "Id": {
                                    "IBAN": "DE21500500009876543210"
                                }
                            },
                            "PmtId": {
                                "EndToEndId": "OriginatorID1234"
                            },
                            "Amt": {
                                "InstdAmt": {
                                    "#text": "2543.44",
                                    "-Ccy": "EUR"
                                }
                            },
                            "RmtInf": {
                                "Ustrd": "Unstructured Remittance Information"
                            }
                        },

                        {
                            "Cdtr": {
                                "Nm": "Other Creditor Name"
                            },

                            "CdtrAgt": {
                                "FinInstnId": {
                                    "BICFI": "SPUEUS2UXXX"
                                }
                            },

                            "CdtrAcct": {
                                "Id": {
                                    "IBAN": "DE21500500001234567897"
                                }
                            },

                            "PmtId": {
                                "EndToEndId": "OriginatorID1235"
                            },

                            "Amt": {
                                "InstdAmt": {
                                    "#text": "112.72",

                                    "-Ccy": "EUR"
                                }
                            },

                            "RmtInf": {
                                "Ustrd": "Unstructured Remittance Information"
                            }
                        }
                    ],

                    "PmtTpInf": {
                        "CtgyPurp": {
                            "Cd": "SAL"
                        },

                        "SvcLvl": {
                            "Cd": "SEPA"
                        }
                    },

                    "DbtrAcct": {
                        "Id": {
                            "IBAN": "DE87200500001234567890"
                        }
                    },

                    "ReqdExctnDt": "2010-11-25",

                    "DbtrAgt": {
                        "FinInstnId": {
                            "BICFI": "BANKUSFFXXX"
                        }
                    },

                    "ChrgBr": "SLEV",

                    "PmtInfId": "Payment-Information-ID-48133",

                    "CtrlSum": "1500.00",

                    "Dbtr": {
                        "PstlAdr": {
                            "Ctry": "India"
                        },

                        "Nm": "John"
                    },

                    "NbOfTxs": "2",

                    "PmtMtd": "TRF"
                }
            }
        }
    }
}



export const postQuery = async (payload) => {
    const data = makePayload(payload)
    try {
        const request = await axios.post('http://ec2-18-236-230-212.us-west-2.compute.amazonaws.com:5000/api/workflow/payment_orchestration', data);
        return request
    } catch (error) {
        return new Error(error)
    }
}