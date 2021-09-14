import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Home";
import DetailPage from "../src/DetailPage/index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail-page/:id" component={DetailPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
