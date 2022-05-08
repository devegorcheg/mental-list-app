import { Field, FieldProps } from "formik";

// components
import { Box, Button } from "@mui/material";
import { DatePickerButton } from "common/components/DatePickerButton";
import { TimePickerButton } from "common/components/TimePickerButton";

export const AddTaskActions: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Field name="dueDate">
          {({ field, form }: FieldProps<Date>) => (
            <Box mx={-1}>
              <DatePickerButton
                value={field.value}
                onChange={date => form.setFieldValue("dueDate", date)}
                sx={{ marginX: 1 }}
              />
              <TimePickerButton
                value={field.value}
                onChange={date => form.setFieldValue("dueDate", date)}
                sx={{ marginX: 1 }}
              />
            </Box>
          )}
        </Field>
      </Box>

      <Button sx={{ marginRight: -1.5, textTransform: "none" }} type="submit">
        Send
      </Button>
    </Box>
  );
};
