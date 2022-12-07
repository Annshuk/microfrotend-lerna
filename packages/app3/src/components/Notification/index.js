import { useState, forwardRef } from 'react'
import {  Modal, ModalBody, Alert  } from 'reactstrap';

/**
 * Checkbox
 * input Checkbox field
 * 
 */
export const SuccessNotification = forwardRef(({ modal, toggle, className, ...rest }, ref) => {	
	
	const [isOpen, setIsOpen] = useState(modal);
	const handleOnShow = ()=>{	
		 setTimeout(function(){
			console.log("Modal...", false);  
				setIsOpen(false);
		  }, 3000);
	};
	
	 /*
	 useEffect(() => {
		  setTimeout(function(){
			console.log("Modal...", Modal);  
			Modal.setState({"isOpen": false});
		  }, 3000);
		
	  });
	  */
	
    return (
       <Modal isOpen={isOpen} onOpened={handleOnShow}>          
          <ModalBody>
				  <Alert color="success">
						Payment successful
				  </Alert>
			</ModalBody>
        </Modal>);
				
})
