import { useState } from "react";

// components
import { Visibility } from "common/components/Visibility";
import { TextField } from "./TextField";

interface IProps {
  name: string;
  placeholder?: string;
}

export const Password: React.FC<IProps> = ({ name, placeholder }) => {
  const [showPassword, setShowing] = useState(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      name={name}
      placeholder={placeholder}
      variant="standard"
      fullWidth
      InputProps={{
        endAdornment: <Visibility show={showPassword} setShow={setShowing} />,
      }}
    />
  );
};
