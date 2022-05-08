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
  ...(open && { color: theme.palette.primary.main }),
}));

export const DatePickerButton: React.FC<Props> = ({ value, onChange, sx }) => {
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
        aria-describedby="date-picker-popover"
      >
        <CalendarTodayIcon />
      </SIconButton>

      <Popover
        id="date-picker-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClick}
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
