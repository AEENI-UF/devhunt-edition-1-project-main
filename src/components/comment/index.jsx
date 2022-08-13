import React from "react";
import { ArrowBackIos, ArrowForwardIos, Circle } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { motion } from "framer-motion";
import { Box, IconButton, Typography } from "@mui/material";
import { COMMENTS } from "./data";

export default function CommentComponent({
  setSelected,
  selected,
  handlePrevious,
  handleNext,
}) {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ maxWidth: 500, fontSize: { xs: "34px", md: "50px" } }}
      >
        <motion.span transition={{ staggerChildren: 0.3 }}>
          {"Our Client say something about us".split("").map((w, i) => (
            <motion.span
              key={`w-${i}`}
              whileHover={{ scaleX: 0.8, scaleY: 1.2 }}
              /* style={{
                      display: "inline-block",
                      width: w === " " ? 15 : undefined,
                    }} */
            >
              {w}
            </motion.span>
          ))}
        </motion.span>
      </Typography>
      <Box
        component={SwipeableViews}
        onChangeIndex={(index, latest, mata) => setSelected(latest)}
        index={selected}
        sx={{ width: { xs: "100vw", md: "auto" } }}
      >
        {COMMENTS.map((comment) => (
          <Content key={comment.user} comment={comment} />
        ))}
      </Box>
      <Box>
        {COMMENTS.map((comment, i) => (
          <Circle
            key={comment.user}
            htmlColor={i === selected ? "#008" : "#000"}
          />
        ))}
      </Box>
      <Box>
        <IconButton onClick={handlePrevious}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </>
  );
}

const Content = ({ key, comment }) => (
  <div key={key}>
    <Typography key={comment.user} variant="body1">
      {comment.content}
    </Typography>
    <Typography key={comment.comment} variant="h6">
      {comment.user}
    </Typography>
  </div>
);
