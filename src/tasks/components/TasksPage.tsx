// components
import { Box } from "@mui/material";

import { MainMenu } from "common/components/MainMenu";
import { AddTask } from "./AddTask";

export const TasksPage: React.FC = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <MainMenu sx={{ position: "absolute", top: 26, right: 26 }} />
      <AddTask />
    </Box>
  );
};
