import { useEffect } from "react";
import { Form, Formik } from "formik";
import { object } from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import { Box, Typography } from "@mui/material";

import { TextField } from "ui/TextField";
import { Link } from "ui/Link";
import { Wrapper } from "./Wrapper";
import { Button } from "ui/Button";

// utils
import { login } from "../actions";
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
  email: emailSchema,
  password: passwordSchema,
});

const initialValues = {
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser]);

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async ({ email, password }, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(login({ email, password }));
          setSubmitting(false);
        }}
      >
        <Form>
          <Box mb={9.75}>
            <Typography align="center" sx={sxTitle}>
              Sign In
            </Typography>
          </Box>
          <Box mb={3}>
            <TextField
              variant="standard"
              placeholder="Email"
              fullWidth
              name="email"
            />
          </Box>
          <Box mb={6}>
            <TextField
              variant="standard"
              placeholder="Password"
              fullWidth
              name="password"
              type="password"
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
              Sign In
            </Button>
            <Typography
              color="textSecondary"
              variant="body1"
              sx={{ marginTop: 4.375 }}
            >
              <Link to="/signup">Sign Up</Link>
            </Typography>
          </Box>
        </Form>
      </Formik>
    </Wrapper>
  );
};
