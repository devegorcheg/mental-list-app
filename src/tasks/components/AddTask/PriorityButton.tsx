import { useState } from "react";
import { useSelector } from "react-redux";
import { useFormContext, useWatch } from "react-hook-form";

// components
import {
  Box,
  IconButton as MuiIconButton,
  IconButtonProps,
} from "@mui/material";

import { CircleIcon } from "common/components/CircleIcon";
import { PriorityPopover } from "./PriorityPopover";

// utils
import { styled, SxProps, Theme } from "@mui/material/styles";
import { selectPriorityById } from "priorities/redusers";
import { RootState } from "store";

// types
import { FormData } from "./AddTask";

const sxBox: SxProps<Theme> = ({ palette }) => ({
  position: "absolute",
  border: `3px solid ${palette.primary.main}`,
  borderRadius: "50%",
  width: "20px",
  height: "20px",
});

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  position: "relative",
  color: theme.palette.text.secondary,
}));

export const PriorityButton: React.FC<IconButtonProps> = props => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { control } = useFormContext<FormData>();
  const priorityId = useWatch({ control, name: "priority" });

  const priority = useSelector((store: RootState) =>
    selectPriorityById(store, priorityId),
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl => (anchorEl ? null : event?.currentTarget));
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-describedby="priority-picker-popover"
        {...props}
      >
        <CircleIcon background={priority?.color} />
        {open ? <Box sx={sxBox} /> : null}
      </IconButton>

      <PriorityPopover open={open} anchorEl={anchorEl} onClose={handleClick} />
    </>
  );
};
