import { useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { TaskItem } from "./TaskItem";

// utils
import { selectAllTasks } from "tasks/redusers";

export const TasksList: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  if (!tasks.length) {
    return null;
  }

  return (
    <Box p={6} pb={16}>
      {tasks.map(({ _id, title, done, priority, dueDate }, index) => (
        <Box key={_id} py={1}>
          <TaskItem
            title={title}
            done={done}
            priorityId={priority}
            dueDate={dueDate}
            divider={index !== tasks.length - 1}
          />
        </Box>
      ))}
    </Box>
  );
};
