import { useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { Drawer } from "app/Drawer";

// utils
import { styled } from "@mui/material/styles";

// types
import { RootState } from "store";

const Main = styled("main")(() => ({
  flexGrow: 1,
}));

export const AppLayout: React.FC = ({ children }) => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  if (!loggedUser) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer />
      <Main>{children}</Main>
    </Box>
  );
};
