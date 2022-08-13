import * as React from "react";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Button, Stack, styled, Typography } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

import Bg1 from "../../assets/bg1.jpg";
import Bg3 from "../../assets/bg3.jpg";
import Bg4 from "../../assets/bg4.jpg";

const HEIGHT = 330;
const WIDTH = 290;

const Wrapper = styled(motion.div)(({ theme }) => ({
  height: HEIGHT,
  width: WIDTH,
  overflow: "hidden",
  position: "relative",
  transition: "all 0.2s",
  borderRadius: 15,
}));

const ImageContainer = styled(motion.div)(({ theme }) => ({
  backgroundSize: "cover",
  position: "absolute",
  height: HEIGHT,
  width: WIDTH,
}));

const Overlay = styled(motion.div)(({ theme }) => ({
  height: HEIGHT,
  width: WIDTH,

  opacity: 1,
}));

const Body = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  padding: "30px 20px",
  color: "white",
  // opacity: 1,
}));

const COLORS = [
  "#012425aa",
  "#000140b3",
  "#420132b7",
  "#2f370090",
  "#3b07028a",
  "#01343596",
];
const BORDER_COLORS = [
  "#06fbff",
  "#009cfdff",
  "#fb02c1ff",
  "#d9ff00ff",
  "#ff1500ff",
  "#00fbffff",
];
const BG = [Bg1, Bg1, Bg3, Bg4, Bg1, Bg1];

export const DomainCard = ({ i }) => {
  const [show, setShow] = useState(false);

  const ref = React.useRef();
  const { scrollY } = useScroll({
    target: ref,
  });
  const top = useMotionValue(0);

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      top.set(latest * 0.08);
      // }
    });
  }, []);

  return (
    <Wrapper
      style={{
        /*   border: show
          ? `2px solid ${BORDER_COLORS[i]}`
          : `2px solid transparent`, */
        boxShadow: show ? `0 0 10px ${BORDER_COLORS[i]}` : null,
        border: `2px solid ${BORDER_COLORS[i]}`,
        top: [0, 2, 3, 5].includes(i) ? top : 0,
      }}
      ref={ref}
    >
      <ImageContainer
        whileHover={{ scale: 1.2 }}
        style={{ backgroundImage: `url(${BG[i]})` }}
      >
        <Overlay
          whileHover={{
            // opacity: 0.9,
            scale: 0.835,
          }}
          style={{
            backgroundColor: COLORS[i],
          }}
          onHoverStart={() => setShow(true)}
          onHoverEnd={() => setShow(false)}
        >
          <Body spacing={2}>
            <AnimateSharedLayout>
              <AnimatePresence exitBeforeEnter>
                {/*   {show ? (
                  <> */}
                <motion.div layoutId="icon"></motion.div>
                <motion.div
                  layoutId="title"
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1, transitionDelay: 1 }}
                >
                  <Typography variant="h4">Service One</Typography>
                </motion.div>
                <motion.div
                  layoutId="paragraph"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transitionDelay: 1,
                    transition: {
                      stiffness: 80,
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <Typography variant="body1" color={"white"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    in blanditiis vel? Maiores cupiditate facere reprehenderit
                    libero aliquid temporibus doloribus!
                  </Typography>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Button variant="outlined">More info</Button>
                </motion.div>
                {/* </> */}
                {/* ) : (
                  <>
                    <motion.div
                      layoutId="icon"
                      exit={{ opacity: 0 }}
                      style={{ position: "relative", top: 80 }}
                    >
                      <AccessAlarm
                        fontSize="large"
                        htmlColor={`${BORDER_COLORS[i]}`}
                      />
                    </motion.div>
                    <motion.div
                      layoutId="title"
                      style={{ position: "relative", top: 80 }}
                    >
                      <Typography variant="h4" sx={{ opacity: 1 }}>
                        Service One
                      </Typography>
                    </motion.div>
                    <motion.div
                      layoutId="paragraph"
                      style={{ position: "relative", top: 80 }}
                    >
                      <Typography variant="body1">...</Typography>
                    </motion.div>
                  </>
                )} */}
              </AnimatePresence>
            </AnimateSharedLayout>
          </Body>
        </Overlay>
      </ImageContainer>
    </Wrapper>
  );
};
