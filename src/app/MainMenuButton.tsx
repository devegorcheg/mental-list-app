import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

// components
import { Box, IconButton, Menu, MenuItem, Theme } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// actions
import { logout } from "auth/actions";

// types
import { SystemStyleObject } from "@mui/system";
import { AppDispatch } from "models/types";

interface Props {
  sx?: SystemStyleObject<Theme>;
}

export const MainMenuButton: React.FC<Props> = ({ sx = {} }) => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={sx} className="mui-fixed">
      <IconButton
        ref={buttonRef}
        onClick={handleClick}
        sx={[
          {
            padding: 0,
            background:
              "transparent linear-gradient(18deg, #56CCF2 0%, #2F80ED 100%) 0% 0% no-repeat padding-box",
          },
        ]}
      >
        <MoreVertIcon sx={{ fontSize: "37px", color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        disablePortal
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
        <MenuItem
          key="signout"
          onClick={() => {
            handleClose();
            dispatch(logout());
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};
