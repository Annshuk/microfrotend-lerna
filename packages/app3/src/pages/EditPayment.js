import { Form, Col, Row, Button, Alert } from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import { Box, Flex } from 'rebass';

import {
    useRecoilState,
} from 'recoil';

import { InputLabelField } from "../components/InputLabelField";
import { Heading } from '../components/Typography/Heading';
import { Fieldset } from '../components/Fieldset';
import { Checkbox } from '../components/Checkbox';
import { CreditTransferDetailsComponent } from '../components/CreditTransferDetailsComponent';

import { getQuery, postQuery, convertDateToIso } from '../services';
import { appState } from '../recoils/atoms';
import { useNavigate } from "react-router-dom";
import { InputLabelReadonlyField } from "../components/InputLabelReadonlyField";


export const EditPayment = () => {

    const navigate = useNavigate();
    const [appDefauls, setFormState] = useRecoilState(appState);
    const { data: payments } = useQuery('payments', getQuery);

    const formProps = useForm({ defaultValues: appDefauls });

    const { handleSubmit, register } = formProps;

    const onSubmit = (formValue) => {
        formValue.CreDtTm = convertDateToIso(formValue.CreDtTm);
        //save form value in state
        setFormState(formValue);

        navigate("/view-and-confirm");
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
                        <InputLabelField readOnly label="Transaction Control Sum" id="CtrlSum"  { ...register('CtrlSum') } type="text" placeholder="Control Sum value" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Country" type="select" id="Ctry"  { ...register('Ctry') }>
                            <option>Choose...</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                        </InputLabelField>
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Name" id="Nm"  { ...register('Nm') } />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions" type="number" id="NbOfTxs" { ...register('NbOfTxs') } placeholder="" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelReadonlyField label="Transaction Message ID" id="MsgId" { ...register('MsgId') } placeholder="" errors="" />
                    </Col>
                </Row>
            </Fieldset>

            <Heading title="Payment Information" variant='h1' />

            <Fieldset >
                <Heading title="Credit Transfer Details" variant='h2' />
                <Row>
                    <Checkbox label="Batch Booking" checked={ appDefauls.BtchBookg }  { ...register('BtchBookg') } id="BtchBookg" name="BtchBookg" />
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Creditor Name" { ...register('creatorName') } id="creatorName" />
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
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                        </InputLabelField>

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Name"  { ...register('debitorName') } id="debitorName" />
                    </Col>
                </Row>


                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions" type="number" { ...register('paymentNoOfTranscation') } id="paymentNoOfTranscation" />
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