import { Box, styled, Typography } from "@mui/material";
import AnimatedPartenersCard from "../../components/animatedParterners";

const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 5,
}));

export function PartenaireSection() {
  return (
    <div>
      <Flex>
        <Typography variant="h3">Our Parteners</Typography>
      </Flex>
      <AnimatedPartenersCard />
    </div>
  );
}
