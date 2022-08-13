import {
  Avatar,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Bg from "../../assets/wecours.jpg";

export default function OrganismSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerWidth = 450;
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        width: "100%",
        height: containerWidth,
      }}
    >
      {isMobile ? (
        <Stack
          direction="column"
          sx={{
            zIndex: 2,
            // border: "dotted",
            position: "absolute",
            top: containerWidth - 200,
          }}
          justifyContent="center"
        >
          {[1, 2, 3, 4, 5].map((team, i) => (
            <TeamCardMobile containerWidth={containerWidth} key={team} i={i} />
          ))}
        </Stack>
      ) : (
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: "0", md: "-15rem" },
            zIndex: 2,
            // border: "dotted",
          }}
          justifyContent="center"
        >
          {[1, 2, 3, 4, 5].map((team, i) => (
            <TeamCard key={team} i={i} />
          ))}
        </Stack>
      )}

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 150,
          backgroundImage: `linear-gradient(#fff0, ${theme.palette.background.default})`,
        }}
      ></Box>
    </Box>
  );
}

const TeamCard = ({ team, i }) => {
  return (
    <Stack
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "dotted",
        position: "relative",
        textAlign: "center",
        top: i === 2 && -40,
      }}
    >
      <Box display="flex" justifyContent="center">
        <Avatar
          sx={{
            width: i === 2 ? 150 : 80,
            height: i === 2 ? 150 : 80,
            position: "relative",
          }}
        />
      </Box>
      <Typography variant="h4">Team member name</Typography>
      <Typography variant="subtitle1">Post</Typography>
    </Stack>
  );
};
const TeamCardMobile = ({ team, i }) => {
  return (
    <Stack
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        border: "dotted",
        position: "relative",
        textAlign: "start",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ border: "dotted" }}
      >
        <Avatar
          sx={{
            width: 60,
            height: 60,
            position: "relative",
          }}
        />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ border: "dotted" }}>
          Team member name
        </Typography>
        <Typography variant="subtitle1">Post</Typography>
      </Box>
    </Stack>
  );
};
