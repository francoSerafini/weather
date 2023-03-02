import { Route, Switch } from "react-router-dom";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Forecast} />
      </Switch>
    </div> //  
  );
}

export default App;
