// components
import { Box, Typography, SxProps, Theme } from "@mui/material";

import { CircleIcon } from "common/components/CircleIcon";

const sxPriorityTitle: SxProps<Theme> = ({ spacing }) => ({
  marginLeft: spacing(1),
});

export const Priority: React.FC<{ color: string; title: string }> = ({
  color,
  title,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <CircleIcon sx={{ fontSize: "12px" }} background={color} />
      <Typography variant="body2" sx={sxPriorityTitle}>
        {title}
      </Typography>
    </Box>
  );
};
