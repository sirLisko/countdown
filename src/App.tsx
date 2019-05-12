import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountdownPage from "./components/CountdownPage";

const App: React.FC = () => {
  return (
    <Router>
      <Route component={CountdownPage} />
    </Router>
  );
};

export default App;
