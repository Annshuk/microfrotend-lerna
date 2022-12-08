import { forwardRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const Loader = forwardRef(({ modal, toggle, className, ...rest }, ref) => {	
	
    return (
       <Modal isOpen={modal} toggle={toggle} className={className} centered={true} >          
          <ModalBody>
		  Processing Payments, please wait...
          </ModalBody>
        </Modal>);
})
