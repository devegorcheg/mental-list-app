import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// types
import { RootState } from "models/types";

export const RequireAuth: React.FC = ({ children }) => {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  if (!loggedUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
