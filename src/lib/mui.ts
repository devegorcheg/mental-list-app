import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F80ED",
    },
    text: {
      secondary: "#BBBBC7",
    },
  },
  typography: {
    fontFamily: '"SF-Pro", "Roboto"',
  },
});

export default theme;
