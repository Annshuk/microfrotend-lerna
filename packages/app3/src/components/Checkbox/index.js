import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'


/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const Checkbox = ({ label, name, id, errors, ...rest }) => <FormGroup check>
    <Label
        check
        for={ id }
    >

    </Label>
    <Col sm={ 10 }>
        <Input
            id={ id }
            name={ name }
            type="checkbox"
            { ...rest }

        />
        { label }

        { errors && <FormFeedback>
            You will not be able to see this
        </FormFeedback> }
    </Col>
</FormGroup>


