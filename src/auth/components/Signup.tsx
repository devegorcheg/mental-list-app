import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, InferType } from "yup";

// components
import { Box, Typography, TextField } from "@mui/material";

import { Link } from "ui/Link";
import { Wrapper } from "./Wrapper";
import { Button } from "ui/Button";
import { Password } from "ui/Password";

// utils
import { signup } from "../actions";
import {
  password as passwordSchema,
  email as emailSchema,
} from "common/validationSchemes";

// types
import { SxProps, Theme } from "@mui/system";
import { AppDispatch, RootState } from "models/types";

type FormData = InferType<typeof validationSchema>;

const sxTitle: SxProps<Theme> = {
  font: "normal normal bold 24px/27px Comfortaa",
};

const validationSchema = object({
  firstName: string().min(3).max(50).required().label("First name"),
  lastName: string().min(3).max(50).required().label("Last name"),
  email: emailSchema,
  password: passwordSchema,
  confirm: string().test(
    "confirm",
    "Password does not match",
    (value, context) => {
      const { parent } = context;
      return value === parent?.password;
    },
  ),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  const onSubmit = (data: FormData) => {
    const { firstName, lastName, email, password } = data;

    const onRejected = () => {
      enqueueSnackbar("Oops, something went wrong", {
        variant: "error",
      });
    };
    const onSuccess = (args: Record<string, unknown>) => {
      if (args?.error) {
        return onRejected();
      }
      enqueueSnackbar("Now you can login.", {
        variant: "success",
      });
      navigate("/");
    };

    dispatch(
      signup({
        firstName,
        lastName,
        email,
        password,
      }),
    ).then(onSuccess, onRejected);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={5}>
          <Typography align="center" sx={sxTitle}>
            Sign Up
          </Typography>
        </Box>

        <Box mb={3}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                variant="standard"
                placeholder="First name"
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
        </Box>

        <Box mb={3}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                variant="standard"
                placeholder="Last name"
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
        </Box>

        <Box mb={3}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                variant="standard"
                placeholder="E-mail"
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
        </Box>

        <Box mb={3}>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <Password
                variant="standard"
                placeholder="Password"
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
        </Box>

        <Box mb={6}>
          <Controller
            name="confirm"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <Password
                variant="standard"
                placeholder="Confirm password"
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
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            gradient
            variant="contained"
            type="submit"
            size="large"
            fullWidth
            sx={{ maxWidth: "257px" }}
          >
            Sign Up
          </Button>

          <Typography
            color="textSecondary"
            variant="body1"
            sx={{ marginTop: 4.375 }}
          >
            I already have an account. <Link to="/login">Sign In</Link>
          </Typography>
        </Box>
      </form>
    </Wrapper>
  );
};
