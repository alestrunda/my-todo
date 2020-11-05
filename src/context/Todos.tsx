import { createContext } from "react";

import { TodoType } from "../hooks/useTodos";

export default createContext<TodoType[]>([]);
