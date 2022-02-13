import { useField } from "formik";

// components
import MTextField, { TextFieldProps } from "@mui/material/TextField";

// utils
import { styled, Theme } from "@mui/material";

const STextField = styled(MTextField)(
  ({ theme: { spacing } }: { theme: Theme }) => ({
    "&.MuiTextField-root .MuiInput-input": {
      paddingBottom: spacing(1.5),
    },
    "&.MuiTextField-root .MuiFormHelperText-root": {
      textAlign: "right",
    },
  }),
);

export const TextField: React.FC<TextFieldProps> = props => {
  const [field, meta] = useField(props as any);
  const { error, touched } = meta;

  return (
    <STextField
      {...field}
      {...props}
      value={field.value ?? ""}
      error={touched && !!error}
      helperText={(touched && error) || " "}
    />
  );
};
