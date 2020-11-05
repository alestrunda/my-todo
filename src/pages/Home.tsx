import React, { useContext } from "react";

import TodosContext from "../context/Todos";
import { TodoType } from "../hooks/useTodos";
import Layout from "../components/Layout";
import Todo from "../components/Todo";

const Home = () => {
  const todos = useContext(TodosContext);

  return (
    <Layout>
      <div className="list-group">
        {todos.map((todo: TodoType) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
