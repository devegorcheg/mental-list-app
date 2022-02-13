import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography } from "@mui/material";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";
import { Wrapper } from "./Wrapper";
import { Button } from "ui/Button";

// utils
import { signup } from "../actions";

// types
import { RootState } from "store";
import { SxProps, Theme } from "@mui/system";

const sxTitle: SxProps<Theme> = {
  font: "normal normal bold 24px/27px Comfortaa",
};
const spacesRegExp = new RegExp("(.*\\s+.*)");

const validationSchema = object({
  firstName: string().min(3).max(50).required().label("First name"),
  lastName: string().min(3).max(50).required().label("Last name"),
  email: string().email().required().label("E-mail"),
  password: string()
    // uppercase
    .matches(
      /(.*?[A-Z]){2,}/,
      "The string must contain at least 2 uppercase alphabetical character",
    )
    // number
    .matches(
      /.*[0-9].*/,
      "The string must contain at least 1 numeric character",
    )
    // special
    .matches(
      /(.*[@$!%*#?&].*)/,
      "The string must contain at least one special character",
    )
    // spaces
    .test("spaces", "The string must not contain spaces", value => {
      if (!value) {
        return true;
      }
      return !spacesRegExp.test(value);
    })
    .min(8)
    .required()
    .label("Password"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

          dispatch(signup({ firstName, lastName, email, password }));

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
          <Box mb={6}>
            <TextField
              variant="standard"
              placeholder="Password"
              fullWidth
              type="password"
              name="password"
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
        </Form>
      </Formik>
    </Wrapper>
  );
};
