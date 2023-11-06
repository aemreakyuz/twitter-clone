import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch } from "react-router-dom";
import WholePage from "./layouts/WholePage/WholePage";
import ThreeColumn from "./layouts/ThreeColumn/ThreeColumn";

function App() {
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
