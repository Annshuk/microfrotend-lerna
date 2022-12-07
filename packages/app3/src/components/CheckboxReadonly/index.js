import { forwardRef } from 'react'
import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'
import { useState } from 'react';

/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const CheckboxReadonly = forwardRef(({ label, name, id, errors, checked, ...rest }, ref) => {
	
    return <FormGroup check inline>
        <Label
            check
            for={ id }
        >

        </Label>
        <Col sm={ 10 } className="p-2">
            {checked && <Input
                innerRef={ ref }
                id={ id }
				checked
                type="checkbox"
				disabled
                { ...rest }
            />}
			
			{!checked && <Input
                innerRef={ ref }
                id={ id }
                type="checkbox"
				disabled
                { ...rest }
            />}
			
            { label }

            { errors && <FormFeedback>
                You will not be able to see this
            </FormFeedback> }
        </Col>
    </FormGroup>
})
