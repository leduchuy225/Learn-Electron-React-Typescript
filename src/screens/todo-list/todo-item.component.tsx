import "bulma/css/bulma.min.css";
import { Icon } from "../../components/icon.component";

export const TodoItem = () => {
  return (
    <div className="box todo-item" style={{ position: "relative" }}>
      <Icon content="remove" className="icon" />

      <div className="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small>
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
          turpis.
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <p className="level-item">Process</p>
          <p className="level-item">Edit</p>
          <p className="level-item">Done</p>
        </div>
      </nav>
    </div>
  );
};
