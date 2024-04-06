import { todoAction } from "./actionTypes";

export const addTodo = ({ text, color }) => ({
  type: todoAction.ADD_TODO,
  payload: { text, color },
});

export const toggleTodo = (id) => ({
  type: todoAction.TOGGLE_TODO,
  payload: { id },
});

export const editingTodo = (id) => ({
  type: todoAction.EDITING_TODO,
  payload: { id },
});

export const editedTodo = (todo) => ({
  type: todoAction.EDITED_TODO,
  payload: { ...todo },
});

export const removeTodo = (id) => ({
  type: todoAction.REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: todoAction.MARK_COMPLETED,
  payload: { id },
});

export const markIncompleted = (id) => ({
  type: todoAction.MARK_INCOMPLETED,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: todoAction.FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: todoAction.MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: todoAction.UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
