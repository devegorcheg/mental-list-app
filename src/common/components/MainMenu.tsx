import { useRef, useState } from "react";

// components
import { IconButton, Menu, MenuItem, Theme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// types
import { SystemStyleObject } from "@mui/system";

interface Props {
  sx?: SystemStyleObject<Theme>;
}

export const MainMenu: React.FC<Props> = ({ sx = {} }) => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={handleClick}
        sx={[
          {
            padding: 0,
            background:
              "transparent linear-gradient(18deg, #56CCF2 0%, #2F80ED 100%) 0% 0% no-repeat padding-box",
          },
          sx,
        ]}
      >
        <MoreVertIcon sx={{ fontSize: "37px", color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ marginTop: 1 }}
      >
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </>
  );
};
