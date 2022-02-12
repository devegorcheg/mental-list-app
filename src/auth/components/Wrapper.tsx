// component
import { Box, Container, Paper } from "@mui/material";

// utils
import { styled } from "@mui/system";
import { deepPurple } from "@mui/material/colors";

const StyledBox = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  background: deepPurple[200],
  "&:before": {
    content: "''",
    display: "block",
    flexGrow: 1,
    minHeight: "30px",
  },
  "&:after": {
    content: "''",
    display: "block",
    flexGrow: 1,
    minHeight: "30px",
  },
}));

export const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledBox>
      <Container maxWidth="sm">
        <Paper elevation={5}>
          <Box px={5} py={5}>
            {children}
          </Box>
        </Paper>
      </Container>
    </StyledBox>
  );
};
