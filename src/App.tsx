import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountdownPage from "components/CountdownPage";
import NewPage from "components/NewPage";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/new" component={NewPage} />
          <Route component={CountdownPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
