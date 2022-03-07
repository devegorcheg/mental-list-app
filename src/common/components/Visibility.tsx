// components
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Visibility: React.FC<Props> = ({ show, setShow }) => (
  <InputAdornment position="end">
    <IconButton onClick={() => setShow(v => !v)} edge="end" size="small">
      {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  </InputAdornment>
);
