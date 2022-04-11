// components
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// utils
import { styled } from "@mui/material/styles";

const SIconButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  color: theme.palette.primary.contrastText,
}));

interface Props {
  size?: "small" | "medium" | "large" | undefined;
  open: boolean;
  onClick: () => void;
}

export const ExpandButton: React.FC<Props> = ({ size, open, onClick }) => {
  return (
    <SIconButton open={open} onClick={onClick} size={size}>
      <ExpandMoreIcon />
    </SIconButton>
  );
};
