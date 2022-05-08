import { useFormik, Form, FormikProvider } from "formik";
import { object, string, date } from "yup";

// components
import { Box } from "@mui/material";

import { AddTaskActions } from "./AddTaskActions";
import { TextField } from "ui/TextField";

// types
import { SxProps, Theme } from "@mui/system";

const initialValues = { title: "", priority: "", dueDate: new Date() };

const validationSchema = object({
  title: string().min(1).max(300).required(),
  priority: string().min(1).required(),
  dueDate: date().required(),
});

const sxBox: SxProps<Theme> = () => ({
  position: "fixed",
  left: 0,
  bottom: 0,
  paddingLeft: "240px",
  width: "100%",
});

export const AddTask: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: data => console.log(data),
  });

  return (
    <Box sx={sxBox}>
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
