import React from 'react';


import {ButtonBase, styled} from '@mui/material';


const ImageButtonContainer = styled(ButtonBase)(({url})=>({
    width:'30%',
    height:'250px',
    backgroundColor:'#fff',
    borderRadius:'7.7px',
    boxShadow:'0px 7.71233px 19.2808px rgba(35, 35, 35, 0.1)',
    // backgroundImage:`url('${url}')`,
    backgroundImage:`linear-gradient(180deg, #00000022 0%, rgba(0,0,0,0.499895026369923) 100%),url('${url}')`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    display:'flex',
    flexDirection:'column',
    justifyContent:'end',
    alignItems:'start',
    padding:'10px',
    color:'#fff',
    fontSize:'2em'


}))


const ImageButton = ({url,children,...props}) => {
  return (
    <ImageButtonContainer {...props} url={url}>
        {children}
    </ImageButtonContainer>
  )
}

export default ImageButton