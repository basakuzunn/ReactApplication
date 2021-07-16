import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Single from "./pages/single/Single";
import GetList from "./components/GetList";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const user = true;
  useEffect(() => {
    async function fetchUsers() {
      try {
        const requestUrl = "https://jsonplaceholder.typicode.com/users";
        const reponse = await fetch(requestUrl);
        const reponseJSON = await reponse.json();
        console.log(reponseJSON);
        setUsers(reponseJSON);
      } catch {}
    }
    fetchUsers();
  }, []);
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
        <Route path="/GetList">
          <GetList users={users} />
        </Route>
      </Switch>
    </Router>
  );
}
