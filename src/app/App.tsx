import { SnackbarProvider } from "notistack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// components
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Auth } from "auth/components/Auth";
import ErrorBoundary from "common/components/ErrorBoundary";
import { AppLayout } from "./AppLayout";
import { Routes } from "./Routes";

// utils
import theme from "lib/mui";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Auth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SnackbarProvider maxSnack={3}>
              <AppLayout>
                <Routes />
              </AppLayout>
            </SnackbarProvider>
          </LocalizationProvider>
        </Auth>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
