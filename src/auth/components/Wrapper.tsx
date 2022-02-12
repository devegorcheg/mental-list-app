// component
import { Box, Container, Paper } from "@mui/material";
import { Logo } from "./Icons/Logo";

// utils
import { styled, SxProps, Theme } from "@mui/system";

const sxWapper: SxProps<Theme> = { display: "flex", minHeight: "100vh" };
const sxBackground: SxProps<Theme> = {
  background: "no-repeat url(imgs/auth-bg.png)",
  backgroundSize: "cover",
  flexGrow: 0,
  flexBasis: "47%",
  maxWidth: "47%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const SAuthBox = styled(Box)(() => ({
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

const SLogo = styled(Logo)(({ theme: { spacing } }: { theme: Theme }) => ({
  paddingBottom: spacing(6.25),
}));

export const Wrapper: React.FC = ({ children }) => {
  return (
    <Box sx={sxWapper}>
      <Box sx={sxBackground}>
        <SLogo width="39%" />
      </Box>
      <SAuthBox>
        <Container maxWidth="sm">
          <Paper elevation={5}>
            <Box px={5} py={5}>
              {children}
            </Box>
          </Paper>
        </Container>
      </SAuthBox>
    </Box>
  );
};
