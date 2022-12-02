
import { Form, Col, Row, InputGroupAddon, InputGroup, Input } from 'reactstrap'

import { InputLabelField } from "../components/InputLabelField"
import { Heading } from '../components/Typography/Heading'
import { Fieldset } from '../components/Fieldset'
import { Checkbox } from '../components/Checkbox'

export const EditPayment = () => {

    return <Form>
        <Fieldset>
            <Heading title="Creditor Details" variant='h1' />
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Credit Transaction Date" type="datetime-local" name="CreDtTm" id="CreDtTm" placeholder="Date" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Transaction Control Sum" id="CtrlSum" name="CtrlSum" placeholder="Control Sum value" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Initiator Country" type="select" id="Ctry" name="Ctry">
                        <option>Choose...</option>
                        <option value="1">India</option>
                        <option value="2">US</option>
                        <option value="3">UK</option>
                    </InputLabelField>
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Initiator Name" id="Nm" name="Nm" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Number of Transactions" id="NbOfTxs" name="NbOfTxs" placeholder="" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Transaction Message ID" id="MsgId" name="MsgId" placeholder="" errors="ere" />
                </Col>
            </Row>
        </Fieldset>



        <Fieldset>
            <Heading title="Creditor Details" variant='h1' />
            <Row>
                <Checkbox label="Batch Booking" aria-label="Checkbox for following text input" name="batch" id="batch" />
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Creditor Name" id="creditor-name" name="creatorName" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Financial Institution Id" id="financial-institution" name="financialInit" placeholder="BICFI" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Creditor Account" placeholder="IBAN" name="creditorAccount" id="creditro-ac" />

                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Payment ID" placeholder="End To End transaction Id" name="paymentID" id="paymentId" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Account" aria-label="Amount (to the nearest dollar)" name="account" id="account" />
                </Col>
                <Col md={ 6 }>

                </Col>
            </Row>
        </Fieldset>


        <Fieldset>
            <Heading title="Creditor Details" variant='h1' />
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Credit Transaction Date" type="datetime-local" name="CreDtTm" id="CreDtTm" placeholder="Date" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Transaction Control Sum" id="CtrlSum" name="CtrlSum" placeholder="Control Sum value" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Initiator Country" type="select" id="Ctry" name="Ctry">
                        <option>Choose...</option>
                        <option value="1">India</option>
                        <option value="2">US</option>
                        <option value="3">UK</option>
                    </InputLabelField>
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Initiator Name" id="Nm" name="Nm" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Number of Transactions" id="NbOfTxs" name="NbOfTxs" placeholder="" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Transaction Message ID" id="MsgId" name="MsgId" placeholder="" errors="ere" />
                </Col>
            </Row>
        </Fieldset>
    </Form>
}