// utils
import { drawerWidth } from "./Drawer";
import { styled } from "@mui/material/styles";

export const Main = styled("main")(() => ({
  flexGrow: 1,
  marginLeft: `-${drawerWidth}px`,
}));
