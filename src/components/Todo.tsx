import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
}

class Todo extends React.PureComponent<Props> {
  render() {
    const { id, title } = this.props;

    return (
      <Link
        to={`/todo/${id}`}
        className="list-group-item list-group-item-action"
      >
        {title}
      </Link>
    );
  }
}

export default Todo;
