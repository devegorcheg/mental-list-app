// components
import { Drawer as MUIDrawer } from "@mui/material";

// utils
import { styled, Theme } from "@mui/material";

export const drawerWidth = 240;

const SDrawer = styled(MUIDrawer)(
  ({ theme: { spacing } }: { theme: Theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background:
        "transparent linear-gradient(14deg, rgba(86, 204, 242, 1) 0%, rgba(47, 128, 237, 1) 100%) 0% 0% no-repeat padding-box",
      padding: spacing(2.75, 3.5),
    },
  }),
);

export const Drawer: React.FC = ({ children }) => {
  return (
    <SDrawer variant="permanent" anchor="left">
      {children}
    </SDrawer>
  );
};
