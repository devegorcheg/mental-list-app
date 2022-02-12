// component
import { Box, Container, Paper } from "@mui/material";

// utils
import { styled } from "@mui/system";

const sxWapper = { display: "flex", minHeight: "100vh" };
const sxBackground = {
  background: "no-repeat url(auth-bg.png)",
  backgroundSize: "cover",
  flexGrow: 0,
  flexBasis: "47%",
  maxWidth: "47%",
};

const AuthBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "53%",
  maxWidth: "53%",
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
    <Box sx={sxWapper}>
      <Box sx={sxBackground} />
      <AuthBox>
        <Container maxWidth="sm">
          <Paper elevation={5}>
            <Box px={5} py={5}>
              {children}
            </Box>
          </Paper>
        </Container>
      </AuthBox>
    </Box>
  );
};
