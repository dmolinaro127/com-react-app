import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorties from "./pages/Favorites";
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups></AllMeetups>
        </Route>
        <Route path="/new-meetups">
          <NewMeetups></NewMeetups>
        </Route>
        <Route path="/favorites">
          <Favorties></Favorties>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
