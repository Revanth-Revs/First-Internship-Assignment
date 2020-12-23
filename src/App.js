import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import PostPage from "./Components/PostPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/posts">
            <PostPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
