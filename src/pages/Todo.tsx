import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import TodosContext from "../context/Todos";
import { TodoType } from "../hooks/useTodos";
import Layout from "../components/Layout";

interface ParamTypes {
  id: string;
}

const Todo = () => {
  const { id }: any = useParams<ParamTypes>();
  const todo = useContext(TodosContext).find(
    (todo: TodoType) => todo.id === id
  );

  return (
    <Layout>
      {!todo && <p className="text-center text-muted">Not found</p>}
      {todo && (
        <div className="jumbotron border pt-4 pb-4">
          <h1 className="display-4">{todo.title}</h1>
          <p className="lead">{todo.description}</p>
          <hr className="my-5" />
          <div className="text-right">
            <Link className="btn btn-primary btn-lg" to="/">
              Back to the list
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Todo;
