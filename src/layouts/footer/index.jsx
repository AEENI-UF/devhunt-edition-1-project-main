import {
  CopyrightOutlined,
  EmailOutlined,
  PhoneOutlined,
  FacebookOutlined,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Snow } from "../../components/particule/Snow";

const variants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  viewportConfig: {
    once: true,
  },
};

export function Footer() {
  const { t } = useTranslation();

  const QUICK_CONTACTS = [
    {
      type: "link",
      icon: (
        <FacebookOutlined
          sx={{
            fontSize: 35,
            color: "primary.contrastText",
          }}
        />
      ),
      value: "AEENI 2022",
      url: "https://web.facebook.com/groups/162416697294083",
    },
    {
      type: "text",
      icon: (
        <PhoneOutlined
          sx={{
            fontSize: 35,
            color: "primary.contrastText",
          }}
        />
      ),
      value: "+2614648907",
    },
    {
      type: "text",
      icon: (
        <EmailOutlined
          sx={{
            fontSize: 35,
            color: "primary.contrastText",
          }}
        />
      ),
      value: "devhunt@example.com",
    },
  ];

  const PARTNER_LINKS = [
    { name: "AlgoMada", url: "https://facebook.com/groups/algomada.mg/" },
    { name: "Akata", url: "https://akata-goavana.com/" },
    { name: "Arato", url: "https://arato.mg/" },
    { name: "KalyBot", url: "https://kalybot.com/" },
    { name: "We Cours", url: "https://wecours.com/" },
    {
      name: "NG Academy",
      url: "https://www.facebook.com/profile.php?id=100077046955769",
    },
  ];

  const CLUB_LINKS = [
    { name: "C2E", url: "https://facebook.com/groups/entraide.mg/" },
    { name: "C3LF", url: "https://facebook.com/groups/46262023721/" },
    {
      name: "ENI Cybersecurity",
      url: "https://facebook.com/groups/1783240761737039/",
    },
    {
      name: "Multimedia",
      url: "https://facebook.com/groups/ClubMultimediaENI",
    },
  ];

  return (
    <Box
      component={motion.footer}
      sx={{
        backgroundColor: "#5d1924",
        pt: {
          xs: 7,
          sm: 10,
        },
        pb: 3,
        position: "relative",
      }}
      variants={variants}
      initial="hide"
      whileInView="visible"
      viewport={{
        once: true,
      }}
    >
      <Snow />
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "space-between",
            mb: 5,
          }}
        >
          <Grid item xs={12} md="auto">
            <Grid
              container
              direction="column"
              spacing={3}
              sx={{
                alignItems: "center",
              }}
            >
              <Grid
                item
                sx={{
                  width: "min-content",
                }}
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  flexWrap="nowrap"
                  spacing={3}
                  sx={{
                    mb: 2,
                  }}
                >
                  <Grid item>
                    <Box
                      component="img"
                      src={require("../../assets/logo/aeeni-white.png")}
                      sx={{
                        width: "7rem",
                      }}
                    ></Box>
                  </Grid>
                  <Grid item>
                    <Typography
                      component="a"
                      sx={{
                        color: "primary.contrastText",
                        fontWeight: "bold",
                        fontSize: "2rem",
                      }}
                    >
                      AEENI
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="p"
                  sx={{
                    color: "primary.contrastText",
                    fontSize: "1.2rem",
                  }}
                >
                  {t("SLOGAN_AEENI")}
                </Typography>
              </Grid>
              <Grid item>
                <List
                  sx={{
                    pb: 2,
                  }}
                >
                  {QUICK_CONTACTS.map((contact, i) => {
                    return (
                      <ListItem key={i}>
                        <ListItemIcon>{contact.icon}</ListItemIcon>
                        {contact.type === "link" ? (
                          <Typography
                            component="a"
                            sx={{
                              color: "primary.contrastText",
                              textDecoration: "none",
                            }}
                            href={contact.url}
                            target="_blank"
                          >
                            {contact.value}
                          </Typography>
                        ) : (
                          <ListItemText
                            sx={{
                              color: "primary.contrastText",
                            }}
                          >
                            {contact.value}
                          </ListItemText>
                        )}
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md="auto">
            <Grid
              container
              direction="row"
              spacing={5}
              sx={{
                flexWrap: "nowrap",
              }}
              justifyContent="space-evenly"
            >
              <Grid
                item
                justifySelf="flex-end"
                sx={{
                  width: "min-content",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                    color: "primary.contrastText",
                  }}
                >
                  {t("CLUB_SECTION_TITLE")}
                </Typography>
                <List
                  sx={{
                    pt: 0,
                  }}
                >
                  {CLUB_LINKS.map((link, i) => (
                    <ListItemText key={i}>
                      <Typography
                        component={motion.a}
                        href={link.url}
                        alt={`link to ${link.name}`}
                        target="_blank"
                        sx={{
                          color: "primary.contrastText",
                          textDecoration: "none",
                          fontSize: {
                            xs: "1rem",
                            sm: "1.3rem",
                          },
                          whiteSpace: "nowrap",
                          "&:hover": {
                            color: "gold",
                          },
                        }}
                        initial={{
                          opacity: 0,
                          y: 100,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: `0.${i * 3}`,
                          duration: 0.8,
                          type: "tween",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                justifySelf="flex-end"
                sx={{
                  width: "min-content",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    color: "primary.contrastText",
                  }}
                >
                  {t("PARTNER_SECTION_TITLE")}
                </Typography>
                <List
                  sx={{
                    pt: 0,
                  }}
                >
                  {PARTNER_LINKS.map((link, i) => (
                    <ListItemText key={i}>
                      <Typography
                        component={motion.a}
                        href={link.url}
                        alt={`link to ${link.name}`}
                        target="_blank"
                        sx={{
                          color: "primary.contrastText",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          fontSize: {
                            xs: "1rem",
                            sm: "1.3rem",
                          },
                          "&:hover": {
                            color: "gold",
                          },
                        }}
                        initial={{
                          opacity: 0,
                          y: 100,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: `0.${i * 3}`,
                          duration: 0.8,
                          type: "tween",
                        }}
                      >
                        {link.name}
                      </Typography>
                    </ListItemText>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderBottomWidth: 1,
            backgroundColor: "#fff",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            color: "primary.contrastText",
            py: 2,
          }}
          component="p"
        >
          <CopyrightOutlined
            sx={{
              fontSize: "medium",
              mr: 1,
              mt: 1,
            }}
          />
          Copyright {new Date().getFullYear()}. {t("COPYRIGHT")}
        </Box>
      </Container>
    </Box>
  );
}
