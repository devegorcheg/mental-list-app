import { useState } from "react";
import { Form, Formik } from "formik";
import { object, string, number } from "yup";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

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

const initialValues = { title: "", priority: 1, color: "" };

const validationSchema = object({
  title: string().required().max(50),
  priority: number().required().positive(),
  color: string().required(),
});

export const AddPriorityDialog: React.FC<Props> = ({ open, toggleOpen }) => {
  const [color, setColor] = useState("");

  return (
    <Dialog open={open} onClose={toggleOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async () => {
          toggleOpen();
        }}
      >
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
            <ColorPicker onClick={color => setColor(color)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleOpen}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
