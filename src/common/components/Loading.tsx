// components
import { Grid as MUIGrid, CircularProgress } from "@mui/material";

// utils
import { styled } from "@mui/material/styles";

const Grid = styled(MUIGrid)(() => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  zIndex: 100,
}));

export const Loading: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <CircularProgress size={80} />
    </Grid>
  );
};
