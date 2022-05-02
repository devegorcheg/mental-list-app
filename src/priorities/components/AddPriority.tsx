import { useState } from "react";

// components
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { AddPriorityDialog } from "./AddPriorityDialog";

// types
import { SxProps, Theme } from "@mui/system";

const sxIconButton: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.primary.contrastText,
  marginLeft: spacing(-1),
});

export const AddPriority: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(v => !v);

  return (
    <>
      <IconButton sx={sxIconButton} size="small" onClick={toggleOpen}>
        <AddIcon />
      </IconButton>
      <AddPriorityDialog open={open} toggleOpen={toggleOpen} />
    </>
  );
};
