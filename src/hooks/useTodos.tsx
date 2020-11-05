import { useEffect, useState } from "react";

import { API_URL } from "../settings";

export interface TodoType {
  description: string;
  id: string;
  title: string;
}

export const useTodos = (): [TodoType[], boolean, string] => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await fetch(`${API_URL}getTodos`);
      const { todos } = await response.json();
      setTodos(todos);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [todos, isLoading, error];
};

export default useTodos;
