import { Field, FieldProps } from "formik";

// components
import { Box, Button, Typography } from "@mui/material";

import { DatePickerButton } from "common/components/DatePickerButton";
import { TimePickerButton } from "common/components/TimePickerButton";
import { PriorityButton } from "./PriorityButton";

export const AddTaskActions: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" mx={-1}>
        <Field name="dueDate">
          {({ field, form }: FieldProps<Date>) => (
            <>
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
            </>
          )}
        </Field>

        <PriorityButton sx={{ marginX: 1 }} />
      </Box>

      <Button sx={{ marginRight: -1.5, textTransform: "none" }} type="submit">
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Send
        </Typography>
      </Button>
    </Box>
  );
};
