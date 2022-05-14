import { useState } from "react";

// components
import { IconButton, Popover, SxProps, TextField, Theme } from "@mui/material";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// utils
import { styled } from "@mui/material/styles";

interface Props {
  value: Date | null;
  onChange: (date: Date | null) => void;
  sx?: SxProps<Theme>;
}

const SIconButton = styled(IconButton, {
  shouldForwardProp: propName => propName !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  color: open ? theme.palette.primary.main : theme.palette.text.secondary,
}));

export const TimePickerButton: React.FC<Props> = ({ value, onChange, sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl => (anchorEl ? null : event.currentTarget));
  };

  return (
    <>
      <SIconButton
        onClick={handleClick}
        size="small"
        open={open}
        sx={sx}
        aria-describedby="time-picker-popover"
      >
        <AccessTimeIcon />
      </SIconButton>

      <Popover
        id="time-picker-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClick}
        PaperProps={{ sx: { height: "372px", overflow: "hidden" } }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <StaticTimePicker
          displayStaticWrapperAs="mobile"
          value={value}
          onChange={onChange}
          renderInput={params => <TextField {...params} />}
        />
      </Popover>
    </>
  );
};
