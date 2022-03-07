import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

// components
import { Box, Typography } from "@mui/material";

import { TextField } from "ui/TextField";
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
import { AppDispatch, RootState } from "store";
import { SxProps, Theme } from "@mui/system";

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

const initialValues = {
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

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  return (
    <Wrapper>
      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);

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

          setSubmitting(false);
        }}
      >
        <Form>
          <Box mb={5}>
            <Typography align="center" sx={sxTitle}>
              Sign Up
            </Typography>
          </Box>
          <Box mb={3}>
            <TextField
              variant="standard"
              placeholder="First name"
              fullWidth
              name="firstName"
            />
          </Box>
          <Box mb={3}>
            <TextField
              variant="standard"
              placeholder="Last name"
              fullWidth
              name="lastName"
            />
          </Box>
          <Box mb={3}>
            <TextField
              variant="standard"
              placeholder="E-mail"
              fullWidth
              name="email"
            />
          </Box>
          <Box mb={3}>
            <Password name="password" placeholder="Password" />
          </Box>
          <Box mb={6}>
            <Password name="confirm" placeholder="Confirm password" />
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
        </Form>
      </Formik>
    </Wrapper>
  );
};
