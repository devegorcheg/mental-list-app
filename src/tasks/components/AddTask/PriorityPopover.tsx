import { useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";

// components
import { Box, Popover, Typography, SxProps, Theme } from "@mui/material";

import { CircleIcon } from "common/components/CircleIcon";

// utils
import { selectAllPriorities } from "priorities/redusers";

// types
import { FormData } from "./AddTask";

interface Props {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const sxPaper: SxProps<Theme> = ({ spacing }) => ({
  padding: spacing(1, 2),
  borderRadius: "8px",
});

const sxTypography: SxProps<Theme> = ({ spacing }) => ({
  paddingLeft: spacing(1),
});

const sxPriorityBox: SxProps<Theme> = ({ spacing }) => ({
  display: "flex",
  alignItems: "center",
  marginY: spacing(1),
  cursor: "pointer",
});

export const PriorityPopover: React.FC<Props> = ({
  open,
  anchorEl,
  onClose,
}) => {
  const { setValue } = useFormContext<FormData>();

  const priorities = useSelector(selectAllPriorities);

  return (
    <Popover
      id="date-picker-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={{ sx: sxPaper }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {priorities.map(({ _id, title, color }) => (
        <Box
          key={_id}
          sx={sxPriorityBox}
          onClick={() => setValue("priority", _id)}
        >
          <CircleIcon fontSize="small" background={color} />
          <Typography variant="body1" sx={sxTypography}>
            {title}
          </Typography>
        </Box>
      ))}
    </Popover>
  );
};
