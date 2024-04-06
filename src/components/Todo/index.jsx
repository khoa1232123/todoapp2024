import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { todoAction } from "../../redux/actionTypes";
import { addTodo, updateSearchTerm } from "../../redux/actions";
import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    text: "",
    color: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = (e) => {
    e.preventDefault();
    if (newTodo.text.trim() !== "") {
      handleAddTodo(newTodo);
      setNewTodo({ text: "", color: newTodo.color });
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      <form>
        <div className="flex items-center mb-4">
          <input
            id="addTodoInput"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Add Todo"
            value={newTodo.text}
            onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
            autoFocus
          />
          <input
            type="color"
            className="border-[1px] border-gray-500 rounded-md p-0.5 h-[42px]"
            value={newTodo.color}
            onChange={(e) => setNewTodo({ ...newTodo, color: e.target.value })}
          />
          <button
            type="submit"
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={20} />
          </button>
        </div>
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
