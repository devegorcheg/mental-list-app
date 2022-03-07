// components
import { Box } from "@mui/material";

import { MainMenu } from "common/components/MainMenu";

export const ToDoPage: React.FC = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <MainMenu sx={{ position: "absolute", top: 26, right: 26 }} />
    </Box>
  );
};
