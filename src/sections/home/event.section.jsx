import * as React from 'react';
import { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Button,
  Container
} from '@mui/material';
import Logo1 from '../../assets/Events/devhunt.jpg';
import Logo2 from '../../assets/Events/Rnc.jpg';
import Logo3 from '../../assets/Events/algo.jpg';
import Logo4 from '../../assets/Events/HI.jpg';
import Logo5 from '../../assets/Events/wfnc.jpg';
import {useTranslation} from 'react-i18next';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

AOS.init();

const Less = <ExpandLess />;
const More = <ExpandMore />;

export default function EventSection() {
    const {t}=useTranslation();
  const [more, setMore] = useState(true);
  const [resMore, setResMore] = useState(true);

    const ImageTab = [
        Logo1 , Logo2 , Logo3 , Logo4,Logo5
    ]
    const dateTab =["13 - 14 Aout 2022","23 juillet 2022","5 fevrier 2022","26-27 mai 2022 ","19 Mars 2022"];

  const ContentTab = [
      t("DEV_HUNT_ED1_DESCRIPTION"),
    t("RNC_DESCRIPTION"),
    t("ALGO_COMPETE_L1_ED1"),
    t("INTERNAL_HACKATHON_HIU_DESCRIPTION"),
    t("WFNC_ED1_DESCRIPTION")
]

    const TitleContentTab = [
        "DEVHUNT","RNC DESCRIPTION","ALGO COMPETE L1 ED1", "HACKATHON INTERNE","WFNC ED1 DESCRIPTION"
    ]

  const HandleMore = e => {
    e.preventDefault();
    if (more) setMore(false)
    else setMore(true)
  }

  const HandleResMore = e => {
    e.preventDefault();
    if (resMore) setResMore(false)
    else setResMore(true)
  }

  return (
    <>
      <Container>
        <Typography
          variant='h2'
            color="primary.main"
          style={{ fontWeight: "bold", marginBottom: "43px",marginTop:"94px" ,textAlign:"center"}}
        >
            {
            t("EVENT_SECTION_TITLE")
            }
        </Typography>

      
        <Box sx={{ justifyContent: "center", display: { xs: "none", md: "flex" } }}>
                <Grid  container spacing={6}>
        {
            [0,1,2].map((i)=>(
                <>
                            <Grid key={i} item xs={4}>
                            <img
                                src={ImageTab[i]}
                                style={{objectFit:"cover",
                                width: "25vw",
                                height: "200px",
                                borderRadius: "13px",
                                boxShadow: "2px 3px 3px 3px #eaeaea"
                                }}
                                data-aos='fade-right'
                                data-aos-easing='ease-out-cubic'
                                data-aos-duration='6000'
                                alt='test' />
                            </Grid>
                            <Grid item xs={7}
                            data-aos='fade-left'
                            data-aos-easing='ease-out-cubic'
                            data-aos-duration='6000'
                            >
                            <Box sx={{ height: "100%"}}>
                                <Typography
                                variant="h6"
                                color="primary.main"
                                style={{ fontWeight: "bold", marginBottom: "12px" }}>
                                {TitleContentTab[i]}
                                </Typography>
                                <Typography
                                variant="subtitle1"
                                color="text.primary">
                                {ContentTab[i]}
                                </Typography>
                                <Typography
                                style={{ marginTop: "20px" }}
                                variant="subtitle1"
                                color="text.primary">
                                {
                                  dateTab[i]
                                }
                                </Typography>
                            </Box>



                        {/* spacing */}
                        <hr
                            style={{ color: "#eaeaea" }}
                        />
                </Grid>
                </>
            ))
        }

          </Grid> 
        </Box>


        <Box
          sx={more && { display: "none" }}
        >
          <Grid container spacing={6} sx={{ display: { xs: "none", md: "flex" },marginTop:'36px' }}>

              {
                  [3,4].map((i)=>(
                <>
                    <Grid key={i} item xs={4}

                    data-aos='fade-up'
                    data-aos-easing='ease-out-cubic'
                    data-aos-duration='1000'
                    >
                    <img
                      src={ImageTab[i]}
                      style={{
                        width: "25vw",
                        objectFit:"cover",
                        height: "200px",
                        borderRadius: "13px",
                        boxShadow: "2px 3px 3px 3px #eaeaea"
                      }}
                      alt='test' />
                  </Grid>
                  <Grid item xs={6}
      
                    data-aos='fade-left'
                    data-aos-easing='ease-out-cubic'
                    data-aos-duration='1000'
                    >
                    <Box sx={{ height: "100%" }}>
                      <Typography
                        variant="h6"
                        color="primary.main"
                        style={{ fontWeight: "bold", marginBottom: "12px" }}>
                        {
                            TitleContentTab[i]
                        }
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.primary">
                        {
                            ContentTab[i]
                        }
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{marginTop:"20px"}}
                        color="text.primary">
                        {
                          dateTab[i]
                        }
                      </Typography>
                    </Box>
      
                    <hr
                      style={{ color: "#eaeaea" }}
                    />
                  </Grid>
            </>
                  ))
              }
 
          </Grid>
        </Box>




        <Button
          variant="contained"
          sx={{ marginLeft: "75%", marginTop: "70px",marginBottom:"45px", display: { xs: "none", md: "flex" } ,backgroundColor:"primary.main"}}
          onClick={HandleMore}
          endIcon={more ? More : Less}
        >
          {
            more ? "view more " : "view less"
          }
        </Button>



        {/* content more */}




      </Container>

      {/* Responsive */}

      <Box
        sx={{ display: { xs: "flex", md: "none" } }}

        data-aos='zoom-in'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='6000'
        >
        <Grid container spacing={3}>

        {
            [0,1,2].map((i)=>(
                <>
                    <Grid key={i} item xs={12}>
                        <img
                        alt='image description'
                        style={{ width: "100%", height: "auto", borderRadius: "13px" ,
                        objectFit:"cover",}}
                        src={ImageTab[i]} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        variant="h6"
                        color="primary.main"
                        style={{ fontWeight: "bold", marginBottom: "12px",marginLeft:"23px" }}
                        >
                        {
                            TitleContentTab[i]
                        }
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        color="text.primary"
                        style={{ marginBottom: "12px" ,marginLeft:"23px"}}
                        >
                        {
                            ContentTab[i]
                        }
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        style={{marginTop:"20px",marginLeft:"23px"}}
                        color="text.primary">
                        {
                          dateTab[i]
                        }
                        </Typography>
                    </Grid>                   
                </>
            ))
        }

        </Grid>
      </Box>


      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        data-aos='fade-right'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='6000'
      >
        <Box
          sx={resMore && { display: "none" }}
          style={{ marginTop: "43px" }}
        >
          <Grid container spacing={3}>

          {
            [3,4].map((i)=>(
                <>

            <Grid key={i} item xs={12}>
              <img
                alt='image description'
                style={{ width: "100%", height: "auto", borderRadius: "13px",
                objectFit:"cover", }}
                src={ImageTab[i]} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                color="primary.main"
                sx={{ fontWeight: "bold", marginBottom: '12px',marginLeft:"23px" }}
              >
                {
                    TitleContentTab[i]
                }
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                style={{ marginBottom: "12px" ,marginLeft:"23px"}}
              >
                {
                    ContentTab[i]
                }
              </Typography>
              <Typography
                variant="subtitle1"
                style={{marginTop:"20px",marginLeft:"23px"}}
                color="text.primary">
                {
                  dateTab[i]
                }
              </Typography>
            </Grid>
                </>
            ))
        }

          </Grid>
        </Box>
      </Box>



      <Button
        variant="contained"
        sx={{ display: { xs: "flex", md: "none" }, marginLeft: "18px", marginTop: "18px",backgroundColor:"primary.main" }}
        onClick={HandleResMore}
        endIcon={resMore ? More : Less}
      >
        {
          resMore ? "view more " : "view less"
        }
      </Button>


    </>
  )
}
