import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, InferType } from "yup";

// components
import { Box, Typography, TextField } from "@mui/material";

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
import { SxProps, Theme } from "@mui/system";
import { AppDispatch, RootState } from "models/types";

type FormData = InferType<typeof validationSchema>;

const sxTitle: SxProps<Theme> = {
  font: "normal normal bold 24px/27px Comfortaa",
};

const validationSchema = object({
  email: emailSchema,
  password: passwordSchema,
});

const defaultValues = {
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
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

  const onSubmit = ({ email, password }: FormData) => {
    dispatch(login({ email, password }));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={9.75}>
          <Typography align="center" sx={sxTitle}>
            Sign In
          </Typography>
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
                placeholder="Email"
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
            name="password"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <TextField
                type="password"
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
      </form>
    </Wrapper>
  );
};
