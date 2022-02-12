import { useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { DrawerHeader } from "./DrawerHeader";
import { Drawer } from "app/Drawer";
import { Main } from "./Main";

// types
import { RootState } from "store";

export const AppLayout: React.FC = ({ children }) => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  if (!loggedUser) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer />
      <Main>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
