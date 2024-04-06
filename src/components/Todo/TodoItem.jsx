import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  editedTodo,
  editingTodo,
  removeTodo,
  toggleTodo,
} from "../../redux/actions";
import { convertToDate } from "../../untils";
import { useRef } from "react";

const TodoItem = ({ todo, editTodo, setEditTodo }) => {
  const dispatch = useDispatch();

  const handleEditingTodo = (id) => {
    console.log({ id, editTodo });
    if (id === editTodo.id) {
      dispatch(editedTodo(editTodo));
      setEditTodo({ id: "", text: "", color: "" });
    } else {
      dispatch(editingTodo(id));
    }
  };

  return (
    <li className="flex flex-col sm:items-center justify-between border-b-[1px] py-2 px-4 gap-2 hover:shadow-2xl hover:bg-white rounded-xl duration-300">
      <form className="flex w-full flex-col">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex items-start justify-start w-full">
            <div
              className={`mr-4 font-bold flex w-full text-left ${
                todo.completed && editTodo.id !== todo.id
                  ? "line-through text-gray-500 opacity-50"
                  : ""
              }`}
              style={{ color: todo.color || "black" }}
            >
              {editTodo.id === todo.id ? (
                <>
                  <input
                    autoFocus
                    className="w-full text-black font-normal p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Edit Todo"
                    value={editTodo.text}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, text: e.target.value })
                    }
                  />

                  <input
                    type="color"
                    className="border-[1px] border-gray-500 rounded-md p-0.5 h-[42px]"
                    value={editTodo.color}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, color: e.target.value })
                    }
                  />
                </>
              ) : (
                todo.text
              )}
            </div>
          </div>
          <div className="flex space-x-3 ml-8">
            <button
              type="button"
              className={`mr-2 text-sm ${
                todo.completed ? "bg-yellow-500" : "bg-green-500"
              } text-white sm:px-2 px-1 py-1 rounded`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? <FaTimes /> : <FaCheck />}
            </button>
            <button
              type="submit"
              className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={(e) => {
                e.preventDefault();
                handleEditingTodo(todo.id);
              }}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <FaTrash />
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <span>CreatedAt: {convertToDate(todo.createdAt)}</span>
          <span>UpdatedAt: {convertToDate(todo.createdAt)}</span>
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
