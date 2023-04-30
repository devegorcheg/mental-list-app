import { useState } from "react";

// components
import { TextField, TextFieldProps } from "@mui/material";

import { Visibility } from "common/components/Visibility";

export const Password: React.FC<TextFieldProps> = props => {
  const [showPassword, setShowing] = useState(false);

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...props.InputProps,
        endAdornment: <Visibility show={showPassword} setShow={setShowing} />,
      }}
    />
  );
};
