import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div> //
  );
}

export default App;
