import { useMemo } from "react";
import { useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { TaskItem } from "./TaskItem";

// types
import { RootState } from "store";
import { Priority } from "priorities/redusers";

export const TasksList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const priorities = useSelector((state: RootState) => state.priorities.list);

  const prioritiesMap = useMemo(
    () =>
      priorities.reduce<Record<string, Priority>>(
        (acc, ell) => ({ ...acc, [ell._id]: ell }),
        {},
      ),
    [priorities],
  );

  if (!tasks.length || !priorities?.length) {
    return null;
  }

  return (
    <Box p={6} pb={16}>
      {tasks.map(({ _id, title, done, priority, dueDate }, index) => (
        <Box key={_id} py={1}>
          <TaskItem
            title={title}
            done={done}
            priority={prioritiesMap[priority]}
            dueDate={dueDate}
            divider={index !== tasks.length - 1}
          />
        </Box>
      ))}
    </Box>
  );
};
