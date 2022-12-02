
import { Form, Col, Row } from 'reactstrap'
import { InputLabelField } from "../components/InputLabelField"

export const EditPayment = () => {
    return <Form>
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
                    <option selected>Choose...</option>
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
    </Form>
}