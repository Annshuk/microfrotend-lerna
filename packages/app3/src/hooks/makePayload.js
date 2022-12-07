export const makePayload = () => ({
    "Document": {
        "CstmrCdtTrfInitn": {
            "GrpHdr": {
                "CreDtTm": "2022-09-14T09:30",
                "CtrlSum": "50001",
                "InitgPty": {
                    "PstlAdr": {
                        "Ctry": "India"
                    },
                    "Nm": "Initiators Name"
                },
                "NbOfTxs": "2",
                "MsgId": "Message-ID-1799566"
            },
            "PmtInf": {
                "BtchBookg": false,
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
})