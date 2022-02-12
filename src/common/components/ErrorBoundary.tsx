import { Component } from "react";

import { Box, Divider, Typography } from "@mui/material";

interface IState {
  error: Error | null;
  errorInfo: any;
}

export default class ErrorBoundary extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errorInfo: null, error: null };
  }

  componentDidCatch(error: Error | null, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.error(error, errorInfo);
  }

  render() {
    const { error, errorInfo } = this.state;
    const message = (error as any)?.message ?? "No message";
    const stack = (errorInfo as any)?.componentStack ?? "No stacktrace";

    if (error) {
      return (
        <Box>
          <Box
            style={{
              height: "150px",
              background:
                "linear-gradient(90deg, rgba(69,0,0,1) 0%, rgba(231,5,5,1) 28%, rgba(231,5,5,1) 53%, rgba(255,166,0,1) 100%)",
            }}
          />
          <Box mt={2}>
            <Typography align="center" variant="h3" gutterBottom>
              Oooops! ERROR
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography align="center" gutterBottom>
              Sorry, an error has occurred that should not occur. We have
              already notified the developers and will try to figure it out as
              soon as possible.
            </Typography>
          </Box>
          {/* The information below should not be displayed for ordinary users */}
          <Divider />
          <Box mx={5}>
            <p>
              <strong>{message}</strong>
            </p>
            <pre>{stack}</pre>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
