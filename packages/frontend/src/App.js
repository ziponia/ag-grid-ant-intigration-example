import { Route, Switch } from "react-router";
import HomePage from "./pages/Home";

import ConfigLoader from "./ConfigLoader";

import "./assets/index.css";
// pages Todo Lodable...

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <ConfigLoader />
    </>
  );
}

export default App;
