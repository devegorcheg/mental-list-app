import { SnackbarProvider } from "notistack";

// components
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

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
          <SnackbarProvider maxSnack={3}>
            <AppLayout>
              <Routes />
            </AppLayout>
          </SnackbarProvider>
        </Auth>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
