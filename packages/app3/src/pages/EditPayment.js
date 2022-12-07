import { Form, Col, Row, Button, Alert } from 'reactstrap';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { useQuery, useMutation  } from 'react-query';
import { Box, Flex } from 'rebass';

import {
  atom,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { InputLabelField } from "../components/InputLabelField";
import { Heading } from '../components/Typography/Heading';
import { Fieldset } from '../components/Fieldset';
import { Checkbox } from '../components/Checkbox';
import { CreditTransferDetailsComponent } from '../components/CreditTransferDetailsComponent';

import { getQuery, postQuery, convertDateToIso, convertIsoDateToLocal } from '../services';
import { appState } from '../recoils/atoms';
import { useNavigate } from "react-router-dom";



export const EditPayment = () => {
	
	const navigate = useNavigate();
	const [appDefaultData, setAppDefaultData] = useRecoilState(appState);
	console.log("setAppDefaultData", appDefaultData);
    const { data: payments } = useQuery('payments', getQuery);
	
    const formProps = useForm({ defaultValues: appDefaultData });	
	const { mutate, isError, data } = useMutation(postQuery);	
    const { control, handleSubmit, register } = formProps;
	
    const onSubmit = (formValue) => {

        console.warn("postData", formValue);
		formValue.CreDtTm = convertDateToIso(formValue.CreDtTm);
		
		//save form value in state
		setAppDefaultData(formValue);
		
        navigate("/view-and-confirm");
    }

    return <Box as={ Form } py="20px">
        { isError && <Alert color="danger">
            This is a primary alert — check it out!
        </Alert> }
        <FormProvider { ...formProps }>
            <Fieldset>
                <Heading title="Customer Credit Transfer Details" variant='h1' />
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Credit Transaction Date"  { ...register('CreDtTm', { required: true, value: appDefaultData.CreDtTm }) } type="datetime-local" id="CreDtTm" placeholder="Date" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField readOnly label="Transaction Control Sum" id="CtrlSum"  { ...register('CtrlSum', { value: appDefaultData.CtrlSum }) } type="text" placeholder="Control Sum value" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Country" type="select" id="Ctry"  { ...register('Ctry', { value: appDefaultData.Ctry }) }>
                            <option>Choose...</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                        </InputLabelField>
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Initiator Name" id="Nm"  { ...register('Nm', { value: appDefaultData.Nm }) } />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions" type="number" id="NbOfTxs" { ...register('NbOfTxs', { value: appDefaultData.NbOfTxs }) } placeholder="" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Transaction Message ID" id="MsgId" { ...register('MsgId', { value: appDefaultData.MsgId }) } placeholder="" errors="ere" />
                    </Col>
                </Row>
            </Fieldset>

            <Heading title="Payment Information" variant='h1' />            
			
			<Fieldset >
                <Heading title="Credit Transfer Details" variant='h2' />
                <Row>
                    <Checkbox label="Batch Booking"  { ...register('BtchBookg') } id="BtchBookg" name="BtchBookg" />
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Creditor Name" { ...register('creatorName', { value: appDefaultData.creatorName }) } id="creatorName" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Financial Institution Id" { ...register('financialInit', { value: appDefaultData.financialInit }) } id="financial-institution" placeholder="BICFI" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Creditor Account" { ...register('creditorAccount', { value: appDefaultData.creditorAccount }) } placeholder="IBAN" id="creditro-ac" />

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment ID" { ...register('paymentID', { value: appDefaultData.paymentID }) } placeholder="End To End transaction Id" id="paymentId" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Account" { ...register('account', { value: appDefaultData.account }) } id="account" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Remittance Information" { ...register('transcationMessage', { value: appDefaultData.transcationMessage }) } id="transcationMessage" readOnly placeholder="Unstructured Remittance Information" />
                    </Col>
                </Row>
                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Category Purpose" { ...register('categoryPurpose', { value: appDefaultData.categoryPurpose }) } id="categoryPurpose" placeholder="Payment Purpose" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Service Level" { ...register('serviceLevel', { value: appDefaultData.serviceLevel }) } id="serviceLevel" placeholder="End To End transaction Id" />
                    </Col>
                </Row>
            </Fieldset>
			
            <Fieldset>

                <Heading title="Debitor  Details" as="h2" />

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Account" { ...register('debitorAccount', { value: appDefaultData.debitorAccount }) } id="debitorAccount" placeholder="IBAN" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Required Execution Date" { ...register('requiredExedate', { value: appDefaultData.requiredExedate }) } type="date" id="requiredExedate" placeholder="Date" />
                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Financial Institution Id" { ...register('debitorInstId', { value: appDefaultData.debitorInstId }) } id="debitorInstId" placeholder="SLEV" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Charge Info"  { ...register('chargeInfo', { value: appDefaultData.chargeInfo }) } id="chargeInfo" placeholder="IBAN" />
                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Information ID"  { ...register('paymentInformationID', { value: appDefaultData.paymentInformationID }) } id="paymentInformationID" placeholder="Payment Information ID" />

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Control Sum" { ...register('controlSum', { value: appDefaultData.controlSum }) } id="controlSum" placeholder="Control Sum" />

                    </Col>
                </Row>

                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Country"  { ...register('debitorCountry', { value: appDefaultData.debitorCountry }) } type="select" id="debitorCountry" >
                            <option>Choose...</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                        </InputLabelField>

                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Debitor Name"  { ...register('debitorName', { value: appDefaultData.debitorName }) } id="debitorName" />
                    </Col>
                </Row>


                <Row>
                    <Col md={ 6 }>
                        <InputLabelField label="Number of Transactions"  type="number" { ...register('paymentNoOfTranscation', { value: appDefaultData.paymentNoOfTranscation }) } id="paymentNoOfTranscation" />
                    </Col>
                    <Col md={ 6 }>
                        <InputLabelField label="Payment Methods"  { ...register('paymentMethods', { value: appDefaultData.paymentMethods }) } id="paymentMethods" />
                    </Col>
                </Row>
            </Fieldset>
            <Flex my="10px" justifyContent="end">
                <Button
                    color="primary"
                    onClick={ handleSubmit(onSubmit) }
                >
                    Confirm
                </Button>
            </Flex>

        </FormProvider>

    </Box>

}