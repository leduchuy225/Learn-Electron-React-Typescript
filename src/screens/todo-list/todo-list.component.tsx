import "bulma/css/bulma.min.css";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { TodoItem } from "./todo-item.component";

export const TodoList = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className="p-3 todo-list">
      <div className="header box">
        <div className="level-item has-text-centered mb-3">
          <p className="title">{t("title")}</p>
        </div>

        <div className="field row">
          <input
            className="input is-success radius-tr-0 radius-br-0"
            placeholder="Add to do"
          />
          <button
            className="button is-primary radius-tl-0 radius-bl-0"
            onClick={() => history.push("/ram-cpu")}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-3">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};
