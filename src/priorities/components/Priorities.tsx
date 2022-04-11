import { useCallback, useState } from "react";

// components
import { Box, Typography } from "@mui/material";
import { ExpandButton } from "common/components/ExpandButton";

// types
import { SxProps, Theme } from "@mui/system";

const sxBox: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

const sxTitle: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.primary.contrastText,
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: "medium",
  marginRight: spacing(1),
});

export const Priorities: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen(v => !v), [setOpen]);

  return (
    <Box sx={sxBox}>
      <Typography sx={sxTitle}>Priority</Typography>
      <ExpandButton size="small" open={open} onClick={handleClick} />
    </Box>
  );
};
