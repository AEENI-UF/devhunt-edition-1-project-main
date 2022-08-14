import * as React from 'react'
import {
  Box,
  Grid,
} from '@mui/material';
import Rosa from '../../assets/images/Rosa.jpg';
import Membre from '../../assets/images/membre.jpg';
import Eldinoh from '../../assets/images/Eldinoh.jpg';
import Tinah from '../../assets/images/Tinah.jpg'
import { makeStyles } from '@mui/styles';
import Eni from '../../assets/images/eni.jpg';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles({
  imge: {
    width: "250px !important",
    height: "300px !important",
    position: "absolute !important",
    borderRadius: "13px !important",
    left: "50px",
    top: "45px",
    boxShadow: "0px 3px 3px 3px rgba(0, 0, 0, 0.301) !important",
    zIndex:99
    
  }
})

export default function Image() {
  const classes = useStyles();

  return (

    <>
      <Box sx={{ position: { sm: "absolute", md: "relative" }, padding: "34px", display: { xs: "none", sm: "none", md: "flex" } }} >

        <Box sx={{ justifyContent: "center" }}>
          <Grid container spacing={5}>
            <Grid item xs={2.2}>
              <Grid item xs={12} sx={{ marginTop: "29px", position: "relative", marginLeft: "65px", }}>
                <img
                  style={{ width: "234px", height: "139px", borderRadius: "13px" }}
                  src={Membre}
                  alt="alt"
                  data-aos='fade-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='1000'
                   />

              </Grid>
              <Grid item xs={12} sx={{ marginTop: "14px" }}>
                <img
                  style={{ width: "234px", height: "175px", borderRadius: "13px" }}
                  src={Eldinoh}
                  alt="alt"
                  data-aos='fade-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'
                />
              </Grid>

            </Grid>
            <Grid item xs={2.2}>
              <Grid item xs={12}>
                <img
                  className={classes.imge}
                  src={Rosa}
                  alt="alt"
                  data-aos='fade-up'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='4000' 
                  />
                  
                <img
                  style={{
                      position:'relative',
                        zIndex:0.1,
                      width: "222px"
                      , height: "265px"
                      , marginTop: "200px",
                        borderRadius: "13px",
                        marginLeft: "170px"}}
                  src={Tinah}
                  alt="alt"
                  data-aos='fade-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='1000'
                   />
              </Grid>


            </Grid>
          </Grid>
        </Box>
      </Box >

      <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
        <img
          style={{ 
            width: "100%",
             height: "23%",
              borderRadius: "0 0 13px 13px",
             marginBottom: "4vw" }}
          alt="alt"
          src={Eni}

          data-aos='fade-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'
           />
      </Box>

    </>


  )
}
