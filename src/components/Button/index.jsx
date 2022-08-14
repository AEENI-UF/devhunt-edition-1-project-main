import * as React from 'react';
import { Button, Box } from '@mui/material';
import "./index.css"

export default function TheButton() {
  return (
    <>
      <Box 
      className="btn_holder"
       sx={{ marginBottom: "23px", 
       marginTop: { xs: "54px", md: "18px" },
        marginLeft: "125px" ,backgroundColor:"primary.main"}}>

        <Button className="kp_btn">
        </Button>

      </Box>
    </>
  )
}