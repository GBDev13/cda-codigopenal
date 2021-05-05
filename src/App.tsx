import GlobalStyle from "./styles/Global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ListaCodigos from "./pages/ListaCodigos";
import LoginPage from "./pages/LoginPage";
import { ToastProvider } from "react-toast-notifications";
import ProtectedRoute from "./helper/ProtectedRoute";

function App() {
  return (
    <>
      <ToastProvider placement="bottom-right">
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoute path="/" exact>
              <ListaCodigos />
            </ProtectedRoute>
          </Switch>
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
