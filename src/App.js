import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTweets } from "./store/actions/tweetActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://654a3b8ae182221f8d52c75a.mockapi.io/tweets")
      .then((res) => dispatch(getTweets(res.data)))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <WholePage />
      </Route>
      <Route path="/">
        <ThreeColumn />
      </Route>
    </Switch>
  );
}

export default App;
