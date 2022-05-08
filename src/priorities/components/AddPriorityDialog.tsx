import { Form, Formik } from "formik";
import { object, string, number } from "yup";
import { useDispatch } from "react-redux";

// components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";

import { TextField } from "ui/TextField";
import { ColorPicker } from "common/components/ColorPicker";

// utils
import { addPriorities } from "priorities/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { AppDispatch } from "store";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const sxDialogContent: SxProps<Theme> = () => ({
  display: "flex",
  flexDirection: "column",
});

const defaultColor = { shade: "500", color: red };
const initialValues = { title: "", priority: 1, color: red[500] };

const validationSchema = object({
  title: string().required().max(50),
  priority: number().required().positive(),
  color: string().required(),
});

export const AddPriorityDialog: React.FC<Props> = ({ open, toggleOpen }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Dialog open={open} onClose={toggleOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={data => {
          dispatch(addPriorities(data));

          toggleOpen();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <DialogTitle>New priority</DialogTitle>
            <DialogContent sx={sxDialogContent}>
              <TextField
                autoFocus
                name="title"
                placeholder="Title"
                fullWidth
                fastField
                variant="standard"
                margin="dense"
              />
              <TextField
                name="priority"
                placeholder="Priority"
                type="number"
                fastField
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box mt={2}>
                <ColorPicker
                  defaultColor={defaultColor}
                  onClick={color => setFieldValue("color", color)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleOpen}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
