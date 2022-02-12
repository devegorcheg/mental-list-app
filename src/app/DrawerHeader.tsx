// utils
import { styled } from "@mui/material/styles";

// types
import { Theme } from "@mui/material";

export const DrawerHeader = styled("div")(
  ({ theme: { spacing, mixins } }: { theme: Theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: spacing(0, 1),
    // necessary for content to be below app bar
    ...mixins.toolbar,
  }),
);
