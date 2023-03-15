import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/:city" component={Forecast} />
      </Switch>
    </div> //
  );
}

export default App;
