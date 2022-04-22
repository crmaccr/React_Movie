import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route.config";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <route.component />{" "}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
