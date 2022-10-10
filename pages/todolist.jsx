import React from "react";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import MainLayout from "../layouts/MainLayout";

export default function todolist() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState(""); //input bar

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    setTodos([...todos]);
  };

  const markTodo = (idx) => {
    todos[idx].mark = !todos[idx].mark;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    [todos[idx], todos[idx - 1]] = [todos[idx - 1], todos[idx]];
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    [todos[idx], todos[idx + 1]] = [todos[idx + 1], todos[idx]];
    setTodos([...todos]);
  };

  //saving function
  const saveTodos = () => {
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("todoList2f", todoStr);
  };

  //to save
  const [init, setInit] = useState(true);
  useEffect(() => {
    if (init) setInit(false);
    else saveTodos();
  }, [todos]);

  //to load
  useEffect(() => {
    const todoStr = localStorage.getItem("todoList2f");
    if (!todoStr) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  return (
    <MainLayout>
      <div className="mx-auto" style={{ maxWidth: "600px" }}>
        {/* Entire App container (required for centering) */}
        <div style={{ maxWidth: "700px" }} className="mx-auto">
          {/* App header */}
          <p className="fw-bold fs-4 text-center">
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <input
            onChange={(event) => setTodoInput(event.target.value)}
            value={todoInput}
            onKeyDown={(k) => {
              if (k.key !== "Enter") return;
              if (todoInput === "") alert("Todo cannot be empty");
              else {
                setTodos([{ desc: todoInput, mark: false }, ...todos]);
                setTodoInput("");
              }
            }}
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
          />
          {/* Todos */}
          {todos.map((todo, i) => (
            <Todo
              desc={todo.desc}
              mark={todo.mark}
              onDelete={() => deleteTodo(i)}
              toMark={() => markTodo(i)}
              toMoveUp={() => moveUp(i)}
              toMoveDown={() => moveDown(i)}
            />
          ))}
          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((t) => !t.mark).length}){" "}
            </span>
            <span className="text-success">
              Completed ({todos.filter((t) => t.mark).length}){" "}
            </span>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
