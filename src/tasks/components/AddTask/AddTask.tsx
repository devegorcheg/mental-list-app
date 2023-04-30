import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, date, InferType } from "yup";

// components
import { Box, TextField } from "@mui/material";

import { AddTaskActions } from "./AddTaskActions";

// utils
import { addTask } from "tasks/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { RootState, AppDispatch } from "store";

export type FormData = InferType<typeof validationSchema>;

const validationSchema = object({
  title: string().min(1).max(300).required(),
  priority: string().min(1).required(),
  dueDate: date().required(),
});

const defaultValues = { title: "", priority: "", dueDate: new Date() };

const sxBox: SxProps<Theme> = theme => ({
  position: "fixed",
  left: "auto",
  right: 0,
  bottom: 0,
  width: "calc(100% - 240px)",
  background: theme.palette.common.white,
});

export const AddTask: React.FC = () => {
  const priorities = useSelector((state: RootState) => state.priorities.list);
  const dispatch = useDispatch<AppDispatch>();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { ...defaultValues, priority: priorities[0]?._id ?? "" },
  });

  const onSubmit = (data: FormData) => {
    dispatch(addTask(data)).then(() => {
      methods.reset({ ...defaultValues, priority: priorities[0]?._id ?? "" });
    });
  };

  return (
    <Box sx={sxBox} className="mui-fixed">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box px={6.25} py={2}>
            <Controller
              name="title"
              control={methods.control}
              rules={{ required: true }}
              render={({
                field: { onChange, onBlur, value, ref },
                fieldState,
              }) => (
                <TextField
                  variant="standard"
                  placeholder="Enter task title…"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  inputRef={ref}
                  error={Boolean(fieldState?.error?.message)}
                  helperText={fieldState?.error?.message || " "}
                />
              )}
            />

            <AddTaskActions />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};
