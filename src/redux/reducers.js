import { generateUUIDv4 } from "../untils";
import { todoAction } from "./actionTypes";

const initState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  todo: {
    id: "",
    text: "",
    color: "",
  },
  filter: "ALL",
  searchTerm: "",
};

const todoReducer = (state = initState, action) => {
  let newTodo = [];
  switch (action.type) {
    case todoAction.ADD_TODO:
      newTodo = [
        ...state.todos,
        {
          color: action.payload.color,
          text: action.payload.text,
          completed: false,
          id: generateUUIDv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodo));

      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.EDITING_TODO:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === action.payload.id),
      };
    case todoAction.EDITED_TODO:
      newTodo = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
              color: action.payload.color,
              updatedAt: new Date(),
            }
          : todo
      );
      console.log({ newTodo });
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
        todo: initState.todo,
      };
    case todoAction.TOGGLE_TODO:
      newTodo = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.REMOVE_TODO:
      newTodo = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.MARK_COMPLETED:
      newTodo = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.MARK_INCOMPLETED:
      newTodo = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: false } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case todoAction.MARK_ALL_COMPLETED:
      newTodo = state.todos.map((todo) => ({
        ...todo,
        completed: true,
      }));
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return {
        ...state,
        todos: newTodo,
      };
    case todoAction.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

export default todoReducer;
