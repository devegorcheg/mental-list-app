import { format } from "date-fns";

// components
import { Box, Typography, SxProps, Theme } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const sxAccessTimeIcon: SxProps<Theme> = ({ palette, spacing }) => ({
  fontSize: "12px",
  color: palette.text.secondary,
  marginRight: spacing(1),
});

interface Props {
  dueDate: string;
}

export const Time: React.FC<Props> = ({ dueDate }) => (
  <Box px={1} display="flex" alignItems="center">
    <AccessTimeIcon sx={sxAccessTimeIcon} />
    <Typography variant="body2">
      {format(new Date(dueDate), "HH:mm")}
    </Typography>
  </Box>
);
