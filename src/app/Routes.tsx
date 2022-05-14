import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";

// components
import { Signup } from "auth/components/Signup";
import { Login } from "auth/components/Login";
import { TasksPage } from "tasks/components/TasksPage";
import { RequireAuth } from "common/components/RequireAuth";

export const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <TasksPage />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </RouterRoutes>
  );
};
