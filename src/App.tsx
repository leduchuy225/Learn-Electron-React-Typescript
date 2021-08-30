import { Component } from "react";
import { TodoList } from "./screens/todo-list/todo-list.component";
import { translateService } from "./services/i18n.service";
import { HashRouter, Route, Switch, useHistory } from "react-router-dom";

import "./styles/App.scss";

class App extends Component {
  translate = translateService;

  render() {
    return (
      <HashRouter>
        <div>
          {/* <Link to="/">Todo List</Link>
          <Link to="/ram-cpu">RAM && CPU </Link> */}
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/ram-cpu" component={RamAndCPU} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const RamAndCPU = () => {
  const history = useHistory();
  return <h1 onClick={() => history.push("/")}>RAM and CPU</h1>;
};

export default App;
