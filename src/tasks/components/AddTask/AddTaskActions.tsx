import { Controller, useFormContext } from "react-hook-form";

// components
import { Box, Button, Typography } from "@mui/material";

import { DatePickerButton } from "common/components/DatePickerButton";
import { TimePickerButton } from "common/components/TimePickerButton";
import { PriorityButton } from "./PriorityButton";

// types
import { FormData } from "./AddTask";

export const AddTaskActions: React.FC = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<FormData>();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" mx={-1}>
        <Controller
          name="dueDate"
          control={control}
          render={({ field: { value, onChange } }) => (
            <>
              <DatePickerButton
                value={value}
                onChange={onChange}
                sx={{ marginX: 1 }}
              />
              <TimePickerButton
                value={value}
                onChange={onChange}
                sx={{ marginX: 1 }}
              />
            </>
          )}
        />

        <PriorityButton sx={{ marginX: 1 }} />
      </Box>

      <Button
        sx={{ marginRight: -1.5, textTransform: "none" }}
        type="submit"
        disabled={isSubmitting}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          Send
        </Typography>
      </Button>
    </Box>
  );
};
