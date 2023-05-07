import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, InferType } from "yup";

// components
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { red } from "@mui/material/colors";

import { ColorPicker } from "common/components/ColorPicker";

// utils
import { addPriorities } from "priorities/actions";

// types
import { SxProps, Theme } from "@mui/system";
import { AppDispatch } from "models/types";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const sxDialogContent: SxProps<Theme> = () => ({
  display: "flex",
  flexDirection: "column",
});

const defaultColor = { shade: "500", color: red };
const defaultValues: FormData = { title: "", priority: 1, color: red[500] };

const validationSchema = object({
  title: string().required().max(50),
  priority: number().required().positive(),
  color: string().required(),
});

type FormData = InferType<typeof validationSchema>;

export const AddPriorityDialog: React.FC<Props> = ({ open, toggleOpen }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { control, handleSubmit, setValue, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [formState, reset]);

  const onSubmit = (data: FormData) => {
    dispatch(addPriorities(data));

    toggleOpen();
  };

  return (
    <Dialog open={open} onClose={toggleOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>New priority</DialogTitle>

        <DialogContent sx={sxDialogContent}>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                autoFocus
                variant="standard"
                placeholder="Title"
                fullWidth
                margin="dense"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                error={Boolean(fieldState?.error?.message)}
                helperText={fieldState?.error?.message || " "}
              />
            )}
          />

          <Controller
            name="priority"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                type="number"
                variant="standard"
                placeholder="Priority"
                fullWidth
                margin="dense"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                error={Boolean(fieldState?.error?.message)}
                helperText={fieldState?.error?.message || " "}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />

          <Box mt={2}>
            <ColorPicker
              defaultColor={defaultColor}
              onClick={color => setValue("color", color)}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleOpen}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
