import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "pages/HomePage";
import RestaurantPage from "pages/RestaurantPage";
import SuccessPage from "pages/SuccessPage";

export default function MainContent() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/restaurant">
            <RestaurantPage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
