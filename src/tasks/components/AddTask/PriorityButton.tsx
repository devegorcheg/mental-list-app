import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useFormContext, useWatch } from "react-hook-form";

// components
import {
  Box,
  IconButton,
  Popover,
  Typography,
  SxProps,
  Theme,
} from "@mui/material";

import { CircleIcon } from "common/components/CircleIcon";

// utils
import { styled } from "@mui/material/styles";

// types
import { RootState } from "store";
import { Priority } from "priorities/redusers";
import { FormData } from "./AddTask";

interface Props {
  sx?: SxProps<Theme>;
}

const sxBox: SxProps<Theme> = ({ palette }) => ({
  position: "absolute",
  border: `3px solid ${palette.primary.main}`,
  borderRadius: "50%",
  width: "20px",
  height: "20px",
});

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

const SIconButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  color: theme.palette.text.secondary,
}));

export const PriorityButton: React.FC<Props> = ({ sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const priorities = useSelector((state: RootState) => state.priorities.list);
  const { control, setValue } = useFormContext<FormData>();
  const priority = useWatch({ control, name: "priority" });

  const prioritiesMap = useMemo(
    () =>
      priorities.reduce<Record<string, Priority>>(
        (acc, ell) => ({ ...acc, [ell._id]: ell }),
        {},
      ),
    [priorities],
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl => (anchorEl ? null : event?.currentTarget));
  };

  return (
    <>
      <SIconButton
        onClick={handleClick}
        size="small"
        sx={sx}
        aria-describedby="priority-picker-popover"
      >
        <CircleIcon background={prioritiesMap[priority]?.color} />
        {open ? <Box sx={sxBox} /> : null}
      </SIconButton>

      <Popover
        id="date-picker-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClick}
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
        {priorities.map(({ _id, title, color }) => {
          return (
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
          );
        })}
      </Popover>
    </>
  );
};
