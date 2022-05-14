import { useSelector, useDispatch } from "react-redux";
import { useFormik, Form, FormikProvider } from "formik";
import { object, string, date } from "yup";

// components
import { Box } from "@mui/material";

import { AddTaskActions } from "./AddTaskActions";
import { TextField } from "ui/TextField";

// utils
import { addTask } from "tasks/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { RootState, AppDispatch } from "store";

const initialValues = { title: "", priority: "", dueDate: new Date() };

const validationSchema = object({
  title: string().min(1).max(300).required(),
  priority: string().min(1).required(),
  dueDate: date().required(),
});

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

  const formik = useFormik({
    initialValues: { ...initialValues, priority: priorities[0]?._id ?? "" },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: (data, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      dispatch(addTask(data)).then(() => {
        setSubmitting(false);
        resetForm();
      });
    },
  });

  return (
    <Box sx={sxBox} className="mui-fixed">
      <FormikProvider value={formik}>
        <Form>
          <Box px={6.25} py={2}>
            <TextField
              name="title"
              variant="standard"
              fullWidth
              placeholder="Enter task title…"
            />
            <AddTaskActions />
          </Box>
        </Form>
      </FormikProvider>
    </Box>
  );
};
