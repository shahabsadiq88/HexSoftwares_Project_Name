import { useEffect, useMemo, useState } from "react";
import "./App.css";

const STORAGE_KEY = "todoapp.tasks.v1";
const THEME_KEY = "todoapp.theme.v1";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) setTodos(parsed);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [{ id: Date.now(), text, completed: false }, ...prev]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    if (editId === id) {
      setEditId(null);
      setEditValue("");
    }
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  const saveEdit = (id) => {
    const nextText = editValue.trim();
    if (!nextText) return;
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: nextText } : todo)));
    setEditId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="main">
      <main className="app">
        <section className="card">
          <div className="top-row">
            <p className="eyebrow">Task Manager</p>
            <button
              className="theme-btn"
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>

          <h1>My Todo App</h1>
          <p className="subtitle">Plan your day and keep focus.</p>

          <div className="input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter task..."
              onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
              }}
            />
            <button onClick={addTodo} className="primary-btn">
              Add Task
            </button>
          </div>

          <div className="toolbar">
            <div className="filters">
              <button
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${filter === "active" ? "active" : ""}`}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
            <p className="count">{activeCount} active</p>
          </div>
        </section>

        <div className="todo-container">
          {filteredTodos.length === 0 ? (
            <p className="empty">No tasks here.</p>
          ) : (
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <li className="todo-item" key={todo.id}>
                  <label className="todo-main">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    {editId === todo.id ? (
                      <input
                        className="edit-input"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(todo.id);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        autoFocus
                      />
                    ) : (
                      <span className={`todo-text ${todo.completed ? "done" : ""}`}>
                        {todo.text}
                      </span>
                    )}
                  </label>

                  <div className="actions">
                    {editId === todo.id ? (
                      <>
                        <button className="save-btn" onClick={() => saveEdit(todo.id)}>
                          Save
                        </button>
                        <button className="ghost-btn" onClick={cancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button className="edit-btn" onClick={() => startEdit(todo)}>
                        Edit
                      </button>
                    )}
                    <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
