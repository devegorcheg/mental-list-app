// components
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// types
import { SxProps, Theme } from "@mui/system";

const sxIconButton: SxProps<Theme> = ({ palette, spacing }) => ({
  color: palette.primary.contrastText,
  marginLeft: spacing(-1),
});

export const AddPriority: React.FC = () => {
  return (
    <IconButton sx={sxIconButton} size="small">
      <AddIcon />
    </IconButton>
  );
};
