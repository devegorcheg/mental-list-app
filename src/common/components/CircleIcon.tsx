// components
import MUICircleIcon from "@mui/icons-material/Circle";

// utils
import { styled } from "@mui/material/styles";

export const CircleIcon = styled(MUICircleIcon, {
  shouldForwardProp: propName => propName !== "background",
})<{ background?: string }>(({ theme, background }) => ({
  color: background ?? theme.palette.text.secondary,
}));
