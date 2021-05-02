import GlobalStyle from "./styles/Global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ListaCodigos from "./pages/ListaCodigos";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" exact>
            <ListaCodigos />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
