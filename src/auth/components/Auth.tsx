import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Backdrop, CircularProgress } from "@mui/material";

// utils
import { getUser } from "auth/actions";

// types
import { AppDispatch, RootState } from "store";

export const Auth: React.FC = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {children}
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" size={150} />
      </Backdrop>
    </>
  );
};
