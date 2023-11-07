import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getTweets } from "./store/actions/tweetActions";
import { axiosWithAuth } from "./api/axiosWithAuth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get("tweets")
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
