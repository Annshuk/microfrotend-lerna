import { forwardRef } from 'react'
import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'
import { useState } from 'react';

/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const Checkbox = forwardRef(({ label, name, id, errors, checked, ...rest }, ref) => {
	
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  
  console.log("defaultChecked", defaultChecked);
  console.log("isChecked", isChecked);
  console.log("rest", rest);
	
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
				checked={isChecked}
				onChange={() => setIsChecked((prev) => !prev)}
                { ...rest }
            />
            { label }

            { errors && <FormFeedback>
                You will not be able to see this
            </FormFeedback> }
        </Col>
    </FormGroup>
})
