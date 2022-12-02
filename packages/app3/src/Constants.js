
export const POST_URL = 'http://ec2-18-236-230-212.us-west-2.compute.amazonaws.com:5000/api/workflow/payment_orchestration';

export const API_HEADERS = {
    "Accept": "*/*",
    "User-Agent": "PostmanRuntime/7.29.2",
    "X-Forwarded-Proto": "https",
    "X-Forwarded-For": "49.36.217.40",
    "Host": "ja4d9gh6aj.execute-api.us-west-2.amazonaws.com",
    "Postman-Token": "eccd8ab85-3963-4508-b85b-32e10ffa3db2",
    "Accept-Encoding": "gzip, deflate, br",
    "X-Forwarded-Port": "443",
    "X-Amzn-Trace-Id": "Root=1-6350ff27-08d980fe01c0d35c04fbeba3",
    "Content-Type": "application/json"
  };

export const REQUEST_BODY = {
    "Document": {
      "CstmrCdtTrfInitn": {
        "GrpHdr": {
          "CreDtTm": "2022-09-14T09:30:47.000Z",
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
          "BtchBookg": "true",
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
  };

