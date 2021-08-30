import { Component } from "react";
import { BrowserRouter, Route, RouteChildrenProps } from "react-router-dom";
import App from "./App";

type RouterType = keyof ReturnType<typeof ViewManager.Views>;

class ViewManager extends Component {
  static Views() {
    return {
      viewA: <App />,
      viewB: <ViewB />,
    };
  }

  static View(props: RouteChildrenProps) {
    const name = props.location.search.substr(1) as RouterType;
    const view = ViewManager.Views()[name];
    if (!view) {
      console.log("View is undefined");
      throw new Error("View '" + name + "' is undefined");
    }
    return view;
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ViewManager.View} />
      </BrowserRouter>
    );
  }
}

const ViewB = () => {
  return <h1>ViewB</h1>;
};

export default ViewManager;
