import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { Loading } from "common/components/Loading";

// utils
import { getUser } from "auth/actions";

// types
import { RootState } from "store";

export const Auth: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    dispatch(getUser());
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};
