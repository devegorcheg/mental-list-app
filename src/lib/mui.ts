import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
  typography: {
    fontFamily: '"SF-Pro", "Roboto"',
  },
});

export default theme;
