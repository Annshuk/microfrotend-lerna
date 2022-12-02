
import { Col, Row, Button } from 'reactstrap'
import { useForm, FormProvider } from 'react-hook-form'

import { InputLabelField } from "../components/InputLabelField"
import { Heading } from '../components/Typography/Heading'
import { Fieldset } from '../components/Fieldset'
import { Checkbox } from '../components/Checkbox'

export const EditPayment = () => {
    const formProps = useForm();

    const { handleSubmit, } = formProps;

    const onSubmit = (formValues) => {
        console.warn(formValues)
    }



    return <FormProvider { ...formProps }>
        <Fieldset>
            <Heading title="Customer Credit Transfer Details" variant='h1' />
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

        <Heading title="Payment Information" variant='h1' />
        <Fieldset>
            <Heading title="Credit Transfer Details" variant='h2' />
            <Row>
                <Checkbox label="Batch Booking" name="btchBookg" id="btchBookg" />
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
                    <InputLabelField label="Remittance Information" id="transcationMessage" readOnly placeholder="Unstructured Remittance Information" />
                </Col>
            </Row>
            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Category Purpose" name="categoryPurpose" id="categoryPurpose" placeholder="Payment Purpose" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Service Level" name="serviceLevel" id="serviceLevel" placeholder="End To End transaction Id" />
                </Col>
            </Row>
        </Fieldset>
        <Fieldset>

            <Heading title="Debitor  Details" as="h2" />

            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Debitor Account" name="debitorAccount" id="debitorAccount" placeholder="IBAN" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Required Execution Date" type="date" name="requiredExedate" id="requiredExedate" placeholder="Date" />
                </Col>
            </Row>

            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Debitor Financial Institution Id" name="DebitorInstId" id="DebitorInstId" placeholder="SLEV" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Charge Info" name="chargeInfo" id="chargeInfo" placeholder="IBAN" />
                </Col>
            </Row>

            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Information ID" name="paymentInformationID" id="paymentInformationID" placeholder="Payment Information ID" />

                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Control Sum" name="controlSum" id="controlSum" placeholder="Control Sum" />

                </Col>
            </Row>

            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Debitor Country" type="select" name="debitorCountry" id="debitorCountry" >
                        <option>Choose...</option>
                        <option value="1">India</option>
                        <option value="2">US</option>
                        <option value="3">UK</option>
                    </InputLabelField>

                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Debitor Name" name="debitorName" id="debitorName" />
                </Col>
            </Row>


            <Row>
                <Col md={ 6 }>
                    <InputLabelField label="Number of Transactions" name="paymentNoOfTranscation" id="paymentNoOfTranscation" />
                </Col>
                <Col md={ 6 }>
                    <InputLabelField label="Payment Methods" name="paymentMethods" id="paymentMethods" />
                </Col>
            </Row>
        </Fieldset>

        <Button
            color="primary"
            type='button'
            onClick={ handleSubmit(onSubmit) }
        >
            Click Me
        </Button>
    </FormProvider>
}