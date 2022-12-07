import { forwardRef } from 'react'
import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'
import { useState } from 'react';

/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const Checkbox = forwardRef(({ label, name, id, errors, checked, ...rest }, ref) => {
	
    return <FormGroup check>
        <Label
            check
            for={ id }
        >

        </Label>
        <Col sm={ 10 }>
            <Input
                innerRef={ ref }
                id={ id }
                type="checkbox"
                { ...rest }
            />
            { label }

            { errors && <FormFeedback>
                You will not be able to see this
            </FormFeedback> }
        </Col>
    </FormGroup>
})
