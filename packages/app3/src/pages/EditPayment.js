
import { Form, Col, Row, Button } from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Box, Flex } from 'rebass'

import { InputLabelField } from "../components/InputLabelField"
import { Heading } from '../components/Typography/Heading'
import { Fieldset } from '../components/Fieldset'
import { Checkbox } from '../components/Checkbox';

import { getQuery } from '../services/getQuery'

export const EditPayment = () => {
    const { data: payments } = useQuery('payments', getQuery);
    const formProps = useForm({ defaultValues: payments });

    const { handleSubmit, register } = formProps;

    const onSubmit = (formValue) => {
        console.warn(formValue)
    }

    return <Box as={ Form } py="20px">
        <FormProvider { ...formProps }>
            <Fieldset>
                <Heading title="Customer Credit Transfer Details" variant='h1' />
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Credit Transaction Date"  { ...register('CreDtTm', { required: true }) } type="datetime-local" id="CreDtTm" placeholder="Date" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Transaction Control Sum" id="CtrlSum"  { ...register('CtrlSum') } placeholder="Control Sum value" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Country" type="select" id="Ctry"  { ...register('Ctry') }>
                            <option>Choose...</option>
                            <option value="1">India</option>
                            <option value="2">US</option>
                            <option value="3">UK</option>
                        </InputLabelField>
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Name" id="Nm"  { ...register('Nm') } />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions" id="NbOfTxs" { ...register('NbOfTxs') } placeholder="" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Transaction Message ID" id="MsgId" { ...register('MsgId') } placeholder="" errors="ere" />
                    </Col>
                </Row>
            </Fieldset>

            <Heading title="Payment Information" variant='h1' />
            <Fieldset>
                <Heading title="Credit Transfer Details" variant='h2' />
                <Row>
                    <Checkbox label="Batch Booking"  { ...register('BtchBookg') } id="btchBookg" />
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Creditor Name" { ...register('creatorName') } id="creditor-name" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Financial Institution Id" { ...register('financialInit') } id="financial-institution" placeholder="BICFI" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Creditor Account" { ...register('creditorAccount') } placeholder="IBAN" id="creditro-ac" />

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment ID" { ...register('paymentID') } placeholder="End To End transaction Id" id="paymentId" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Account" { ...register('account') } id="account" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Remittance Information" { ...register('transcationMessage') } id="transcationMessage" readOnly placeholder="Unstructured Remittance Information" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Category Purpose" { ...register('categoryPurpose') } id="categoryPurpose" placeholder="Payment Purpose" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Service Level" { ...register('serviceLevel') } id="serviceLevel" placeholder="End To End transaction Id" />
                    </Col>
                </Row>
            </Fieldset>
            <Fieldset>

                <Heading title="Debitor  Details" as="h2" />

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Account" { ...register('debitorAccount') } id="debitorAccount" placeholder="IBAN" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Required Execution Date" { ...register('requiredExedate') } type="date" id="requiredExedate" placeholder="Date" />
                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Financial Institution Id" { ...register('debitorInstId') } id="debitorInstId" placeholder="SLEV" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Charge Info"  { ...register('chargeInfo') } id="chargeInfo" placeholder="IBAN" />
                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Information ID"  { ...register('paymentInformationID') } id="paymentInformationID" placeholder="Payment Information ID" />

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Control Sum" { ...register('controlSum') } id="controlSum" placeholder="Control Sum" />

                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Country"  { ...register('debitorCountry') } type="select" id="debitorCountry" >
                            <option>Choose...</option>
                            <option value="1">India</option>
                            <option value="2">US</option>
                            <option value="3">UK</option>
                        </InputLabelField>

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Name"  { ...register('debitorName') } id="debitorName" />
                    </Col>
                </Row>


                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions" { ...register('paymentNoOfTranscation') } id="paymentNoOfTranscation" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Methods"  { ...register('paymentMethods') } id="paymentMethods" />
                    </Col>
                </Row>
            </Fieldset>
            <Flex my="10px" justifyContent="end">
                <Button
                    color="primary"
                    onClick={ handleSubmit(onSubmit) }
                >
                    Next
                </Button>
            </Flex>

        </FormProvider>

    </Box>

}