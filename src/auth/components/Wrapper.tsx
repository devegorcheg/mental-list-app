// component
import { Box, Container, Hidden } from "@mui/material";
import { Logo } from "./Icons/Logo";

// utils
import { styled, SxProps, Theme } from "@mui/system";

const sxWapper: SxProps<Theme> = { display: "flex", minHeight: "100vh" };
const sxBackground: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 0,
  flexBasis: "47%",
  maxWidth: "47%",
  background: "no-repeat url(imgs/auth-bg.png)",
  backgroundSize: "cover",
};

const SAuthBox = styled(Box)(
  ({ theme: { breakpoints } }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 0,
    flexBasis: "53%",
    maxWidth: "53%",
    [breakpoints.down("md")]: {
      flexBasis: "100%",
      maxWidth: "100%",
    },
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
  }),
);

const SLogo = styled(Logo)(({ theme: { spacing } }: { theme: Theme }) => ({
  paddingBottom: spacing(6.25),
}));

export const Wrapper: React.FC = ({ children }) => {
  return (
    <Box sx={sxWapper}>
      <Hidden mdDown>
        <Box sx={sxBackground}>
          <SLogo width="39%" />
        </Box>
      </Hidden>
      <SAuthBox>
        <Container maxWidth="sm">{children}</Container>
      </SAuthBox>
    </Box>
  );
};
