import { Field, FieldProps } from "formik";

// components
import { Box, Button } from "@mui/material";
import { DatePickerButton } from "common/components/DatePickerButton";

export const AddTaskActions: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Field name="dueDate">
          {({ field, form }: FieldProps<Date>) => (
            <DatePickerButton
              value={field.value}
              onChange={date => form.setFieldValue("dueDate", date)}
            />
          )}
        </Field>
      </Box>

      <Button sx={{ marginRight: -1.5, textTransform: "none" }} type="submit">
        Send
      </Button>
    </Box>
  );
};
