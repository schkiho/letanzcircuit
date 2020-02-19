import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";

import "./App.scss";

function App() {
  return (
    <Fragment>
      <Landing />
    </Fragment>
  );
}

export default App;
