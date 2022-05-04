import { Form, Formik } from "formik";
import { object, string, number } from "yup";

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

// types
import { SxProps, Theme } from "@mui/system";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const sxDialogContent: SxProps<Theme> = () => ({
  display: "flex",
  flexDirection: "column",
});

const initialValues = { title: "", priority: 1, color: red[500] };

const validationSchema = object({
  title: string().required().max(50),
  priority: number().required().positive(),
  color: string().required(),
});

export const AddPriorityDialog: React.FC<Props> = ({ open, toggleOpen }) => {
  return (
    <Dialog open={open} onClose={toggleOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async () => {
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
                variant="standard"
                margin="dense"
              />
              <TextField
                name="priority"
                placeholder="Priority"
                type="number"
                variant="standard"
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box mt={2}>
                <ColorPicker
                  defaultColor={{ shade: "500", color: red }}
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
