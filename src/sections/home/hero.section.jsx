import * as React from "react";
import { Box, styled, Stack, Typography, Button } from "@mui/material";
import "../../../node_modules/aos/dist/aos.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Assets
import Hui1 from "../../assets/images/hui/hui1.jpg";
import Hui2 from "../../assets/images/hui/hui2.jpg";
import Hui3 from "../../assets/images/hui/hui3.jpg";
import Hui4 from "../../assets/images/hui/hui4.jpg";
import Hui5 from "../../assets/images/hui/hui5.jpg";
import Hui6 from "../../assets/images/hui/hui6.jpg";
import Hui7 from "../../assets/images/hui/hui7.jpg";

import Choral from "../../assets/images/choral/choral.JPG";
import Choral1 from "../../assets/images/choral/choral2.JPG";
import Choral2 from "../../assets/images/choral/choral2.JPG";
import Choral3 from "../../assets/images/choral/choral3.JPG";
import Choral4 from "../../assets/images/choral/choral4.JPG";
import Choral5 from "../../assets/images/choral/choral7.JPG";
import Choral6 from "../../assets/images/choral/choral6.JPG";

const dataRow1 = [
  Hui1,
  Choral,
  Hui2,
  Hui3,
  Choral2,
  Hui5,
  Choral3,
  Hui6,
  Choral4,
  Hui4,
  Choral5,
  Choral1,
];
const dataRow2 = [
  Hui1,
  Choral,
  Hui2,
  Choral1,
  Hui3,
  Choral2,
  Hui7,
  Choral6,
  Hui4,

  Hui5,
  Choral3,
  Hui6,
  Choral4,
  Choral5,
];
const dataRow3 = [
  Choral,
  Choral1,
  Hui2,
  Choral2,
  Hui1,
  Choral4,
  Hui4,
  Hui5,
  Choral3,
  Hui3,
  Hui6,
  Choral5,
];

const Background = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100vw",
  height: "90vh",
}));

const Slide = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(#100100,#fff0)",
  position: "absolute",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  filter: "brightness(0.4)",
}));

const TextContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  translate: "-50% -50%",

  width: "100%",
  height: "60%",
  display: "grid",
  placeItems: "center",
  rowGap: 30,
  maxWidth: "40rem",

  textAlign: "center",
}));

const Blur = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundImage: "linear-gradient(#fff0,#2b0101)",
}));

const duration = 140;
export function ContentHero() {
  const { t } = useTranslation();
  return (
    <>
      <div id="home"></div>
      <Background>
        <Slide>
          <AnimatedStack>
            {dataRow1.map((item) => (
              <HeroCard key={item} item={item} />
            ))}
          </AnimatedStack>

          <AnimatedStack reversed={true}>
            {dataRow2.map((item) => (
              <HeroCard key={item} item={item} />
            ))}
          </AnimatedStack>
          <AnimatedStack>
            {dataRow3.map((item) => (
              <HeroCard key={item} item={item} />
            ))}
          </AnimatedStack>
          <AnimatedStack reversed={true}>
            {dataRow1.map((item) => (
              <HeroCard key={item} item={item} />
            ))}
          </AnimatedStack>
        </Slide>
        <TextContainer sx={{ top: { xs: "40%", md: "50%" }, zIndex: 2 }}>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            color="white"
            sx={{
              maxWidth: { xs: "90vw", md: 600 },
              fontSize: { xs: "3rem", md: "3.5rem" },
            }}
          >
            {/* {feature.title} */}
            {t("SLOGAN_AEENI")}
          </Typography>
          <Typography variant="h5" color="white">
            {t("AEENI_DESCRIPTION")}
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            {t("CTA")}
          </Button>
        </TextContainer>
        <Blur sx={{ height: "10rem", zIndex: 0 }} />
      </Background>
    </>
  );
}

function AnimatedStack({ children, reversed }) {
  const keyframes = reversed ? [0, -2000, 0] : [-2000, 0, -2000];
  return (
    <Stack
      direction="row"
      sx={{ width: { xs: "1000%", md: "400%" }, mb: 1 }}
      component={motion.span}
      spacing={1}
      animate={{
        x: keyframes,
        transition: {
          repeat: Infinity,
          duration,
          type: "keyframes",
        },
      }}
    >
      {children}
    </Stack>
  );
}

function HeroCard({ item }) {
  return (
    <Box
      sx={{
        width: 350,
        height: 200,
        borderRadius: 5,
        backgroundImage: `url(${item})`,
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
