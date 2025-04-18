import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route 
          path={route.path} 
          element={
            route.protected ? (
              <ProtectedRoute>
                <route.element />
              </ProtectedRoute>
            ) : (
              <route.element />
            )
          } 
          key={route.path} 
        />
      ))}
    </Routes>
  );
}
