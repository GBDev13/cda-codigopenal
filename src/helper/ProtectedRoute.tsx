import { ReactNode } from "react";
import { useSelector } from "react-redux";
import {
  Route, useHistory,
} from "react-router-dom";
import { RootState } from "../store/configureStore";

interface ProtectedRouterProps {
  path: string;
  exact: boolean;
  children: ReactNode;
}

function ProtectedRoute({ path, exact, children }: ProtectedRouterProps) {
  const { login } = useSelector((state: RootState) => state);

  const history = useHistory();

  if (!login.data) {
    history.push("/login");
  }

  return (
    <Route path={path} exact={exact}>{children}</Route>
  )
  
};

export default ProtectedRoute;
