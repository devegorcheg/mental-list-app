import { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import { Box } from "@mui/material";

import { TasksList } from "./TasksList";
import { AddTask } from "./AddTask";

// utils
import { getTasks } from "tasks/actions";

// types
import { AppDispatch } from "store";

export const TasksPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <Box>
      <TasksList />
      <AddTask />
    </Box>
  );
};
