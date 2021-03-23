import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from "./pages/landing";
import placeholder from "./pages/placeholder";
import home from "./pages/home";
import guest from "./pages/guest";
import groupMenu from "./pages/groupmenu";
import generatedPlaylist from "./pages/generatedPlaylist";
import addMyMusic from "./pages/addMyMusic";
import members from "./pages/members.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={landing} />
          <Route exact path="/placeholder" component={placeholder} />
          <Route exact path="/home" component={home} />
          <Route exact path="/guest" component={guest} />
          <Route exact path="/groupMenu" component={groupMenu} />
          <Route
            exact
            path="/generatedPlaylist"
            component={generatedPlaylist}
          />
          <Route exact path="/addMyMusic" component={addMyMusic} />
          <Route exact path="/members" component={members} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
