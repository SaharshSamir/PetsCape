import React from 'react';
import {Image} from '@chakra-ui/react';

import {Modal } from '@mui/material';


const ImageModal = ({state,toggleModal,url}) => {
  return (
    <Modal open={state} onClose={toggleModal} >
        <Image src={url} width="300px" height="250px" />
    </Modal>

  )
}

export default ImageModal