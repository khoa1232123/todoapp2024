import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  const todo = useSelector((state) => state.todo);

  const [editTodo, setEditTodo] = useState({
    id: "",
    text: "",
    color: "",
  });

  useEffect(() => {
    setEditTodo(todo);
  }, [todo.id]);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
