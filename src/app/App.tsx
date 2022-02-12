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
      <Auth>
        <ErrorBoundary>
          <AppLayout>
            <Routes />
          </AppLayout>
        </ErrorBoundary>
      </Auth>
    </ThemeProvider>
  );
};
