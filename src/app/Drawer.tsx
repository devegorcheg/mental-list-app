// components
import { Drawer as MUIDrawer, Typography } from "@mui/material";

export const drawerWidth = 240;

export const Drawer: React.FC = () => {
  return (
    <MUIDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        background:
          "transparent linear-gradient(14deg, rgba(86, 204, 242, 1) 0%, rgba(47, 128, 237, 1) 100%) 0% 0% no-repeat padding-box",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="body1" display="block">
        This Is Logo
      </Typography>
      <Typography variant="body1" display="block">
        And The List
      </Typography>
    </MUIDrawer>
  );
};
