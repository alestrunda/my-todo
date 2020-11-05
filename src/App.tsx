import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TodosContext from "./context/Todos";
import { useTodos } from "./hooks/useTodos";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todo";

function App() {
  const [todos, isLoading, error] = useTodos();

  return (
    <TodosContext.Provider value={todos}>
      {isLoading || error ? (
        <Layout>
          {error && <p className="text-danger text-center">{error}</p>}
          {isLoading && <p className="text-muted text-center">Loading...</p>}
        </Layout>
      ) : (
        <Router>
          <Switch>
            <Route path="/todo/:id">
              <Todos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      )}
    </TodosContext.Provider>
  );
}

export default App;
