import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Single from "./pages/single/Single";
import Users from "./pages/users/Users";
import User from "./components/User/User";

export default function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/posts/:id">
          <Single />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}
