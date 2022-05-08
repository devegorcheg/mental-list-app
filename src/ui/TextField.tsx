import { Field, FastField, FieldProps } from "formik";

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

const InnerTextField: React.FC<TextFieldProps & FieldProps<string>> = ({
  field,
  meta,
  ...props
}) => {
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

export const TextField: React.FC<TextFieldProps & { fastField?: boolean }> = ({
  name,
  fastField,
  ...props
}) => {
  const FieldComponent = fastField ? FastField : Field;

  return (
    <FieldComponent name={name}>
      {(fieldProps: FieldProps<string>) => (
        <InnerTextField {...fieldProps} name={name} {...props} />
      )}
    </FieldComponent>
  );
};
