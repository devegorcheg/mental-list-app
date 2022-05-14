import { useSelector } from "react-redux";

// components
import { Box } from "@mui/material";

import { Drawer } from "./Drawer";
import { Logo } from "common/components/Icons/Logo";
import { Priorities } from "priorities/components/Priorities";
import { MainMenuButton } from "./MainMenuButton";

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
      <Drawer>
        <Box>
          <Logo width={100} />
        </Box>
        <Box mt={3}>
          <Priorities />
        </Box>
      </Drawer>
      <Main>
        <MainMenuButton sx={{ position: "fixed", top: 26, right: 26 }} />
        {children}
      </Main>
    </Box>
  );
};
