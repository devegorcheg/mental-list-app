import { useSelector } from "react-redux";

// components
import { Box, Typography, SxProps, Theme } from "@mui/material";

import { CircleIcon } from "common/components/CircleIcon";

// utils
import { selectPriorityById } from "priorities/redusers";

// types
import { RootState } from "store";

interface Props {
  priorityId: string;
}

const sxPriorityTitle: SxProps<Theme> = ({ spacing }) => ({
  marginLeft: spacing(1),
});

export const Priority: React.FC<Props> = ({ priorityId }) => {
  const priority = useSelector((state: RootState) =>
    selectPriorityById(state, priorityId),
  );

  if (!priority) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center">
      <CircleIcon sx={{ fontSize: "12px" }} background={priority.color} />
      <Typography variant="body2" sx={sxPriorityTitle}>
        {priority.title}
      </Typography>
    </Box>
  );
};
