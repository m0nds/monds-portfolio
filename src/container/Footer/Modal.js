import React, {useEffect} from 'react'
import Alert from '@mui/material/Alert';

const Modal = ({closeModal}) => {

    useEffect(() => {
      setTimeout(() => {
        closeModal()
      }, 1500);
    })
    
  return <Alert severity="warning">Please fill out the form!</Alert>
}

export default Modal