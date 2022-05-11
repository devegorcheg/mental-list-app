// components
import { Box, Checkbox, Typography, Divider } from "@mui/material";

import { Priority } from "./Priority";
import { Time } from "./Time";

// types
import { Priority as IPriority } from "priorities/redusers";

interface Props {
  title: string;
  description?: string;
  done: boolean;
  priority: IPriority;
  dueDate: string;
  divider?: boolean;
}

export const TaskItem: React.FC<Props> = ({
  title,
  description,
  done,
  priority,
  dueDate,
  divider,
}) => {
  return (
    <>
      <Box display="flex">
        <Box>
          <Checkbox checked={done} />
        </Box>
        <Box pt={1} pb={2} ml={2}>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {description ?? "Enter description…"}
          </Typography>

          <Box display="flex" pt={2.5}>
            <Priority title={priority.title} color={priority.color} />
            <Time dueDate={dueDate} />
          </Box>
        </Box>
      </Box>
      {divider ? <Divider light sx={{ marginX: 1.5 }} /> : null}
    </>
  );
};
