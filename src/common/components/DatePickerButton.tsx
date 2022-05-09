import { useState } from "react";

// components
import { IconButton, Popover, SxProps, TextField, Theme } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

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

export const DatePickerButton: React.FC<Props> = ({ value, onChange, sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <SIconButton
        onClick={handleOpen}
        size="small"
        open={open}
        sx={sx}
        aria-describedby="date-picker-popover"
      >
        <CalendarTodayIcon />
      </SIconButton>

      <Popover
        id="date-picker-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{ sx: { height: "295px", overflow: "hidden" } }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={onChange}
          views={["month", "day"]}
          renderInput={params => <TextField {...params} />}
        />
      </Popover>
    </>
  );
};
