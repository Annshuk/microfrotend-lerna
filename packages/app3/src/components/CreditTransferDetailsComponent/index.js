import { forwardRef } from 'react';
import { Input, Label, FormGroup, FormFeedback } from 'reactstrap'
import { InputLabelField } from "../InputLabelField";
import { Heading } from '../Typography/Heading';
import { Fieldset } from '../Fieldset';
import { Checkbox } from '../Checkbox';
import { Form, Col, Row, Button, Alert } from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';
import { useQuery, useMutation } from 'react-query';
import { getQuery, postQuery } from '../../services';

/**
 * InputLabelField
 * input label field
 * 
 */
export const CreditTransferDetailsComponent = forwardRef(({ name, label, id, errors,BtchBookg,creatorName,financialInit,creditorAccount,paymentID,account,transcationMessage,categoryPurpose,serviceLevel, ...rest }, ref) => {
    const { data: payments } = useQuery('payments', getQuery);
	const formProps = useForm({ defaultValues: payments });	
    const { control, handleSubmit, register } = formProps;   

   return (<Fieldset >
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
    )
})

