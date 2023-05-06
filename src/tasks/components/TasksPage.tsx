import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { TasksList } from "./TasksList";
import { AddTask } from "./AddTask";

// utils
import { getTasks } from "tasks/actions";

// types
import { AppDispatch, RootState } from "store";

export const TasksPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sort, filter } = useSelector((store: RootState) => store.priorities);

  useEffect(() => {
    dispatch(getTasks({ sort, filter }));
  }, [sort, filter]);

  return (
    <Box>
      <TasksList />
      <AddTask />
    </Box>
  );
};
