import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountdownPage from "components/CountdownPage";
import NewPage from "components/NewPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/new" component={NewPage} />
        <Route component={CountdownPage} />
      </Switch>
    </Router>
  );
};

export default App;
