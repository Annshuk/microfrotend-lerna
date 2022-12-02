import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'


/**
 * InputLabelField
 * input label field
 * 
 */
export const InputLabelField = forwardRef(({ label, id, name, errors, ...rest }, ref) => {
    const { register } = useFormContext()

    return (<FormGroup row>
        <Label
            for={ id }

        >
            { label }
        </Label>
        <Col>
            <Input
                { ...register(name, { required: true }) }
                type="text"
                ref={ ref }
                id={ id }
                { ...rest }

            />
            { errors && <FormFeedback>
                You will not be able to see this
            </FormFeedback>
            }
        </Col>
    </FormGroup>
    )
})

