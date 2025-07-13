import { use, useState } from "react";
import "./style.css";
import type { Category, Priority, Status, TaskItem } from "../../types/taskTypes";

const TaskManager = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<Category>("Feature");
  const [status, setStatus] = useState<Status>("To Do");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [filter, setFilter] = useState<"All" | Status>("All");

  const [editingTask, setEditingTask] = useState<TaskItem|null>(null)
  

  const addTask = () => {
    if (title.trim() === "") return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        description,
        category,
        status,
        priority,
      },
    ]);
    setTitle("");
    setDescription("");
    setCategory("Feature");
    setStatus("To Do");
    setPriority("Medium");
  };

  const handleStatusChange = (id: number, newStatus: Status) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, status: newStatus } : task
      )
    );
  };

  const openEditModal = (task: TaskItem) => {
    setEditingTask({...task});
  };

  //разобрать
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingTask) return;
    
    const { name, value } = e.target;
    setEditingTask({
      ...editingTask,
      [name]: value
    });
  };

  // Сохранение изменений
  const saveEditedTask = () => {
    if (!editingTask) return;
    
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? editingTask : task
    ));
    
    setEditingTask(null);
  };

  

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "All":
        return true;
      case "To Do":
        return task.status === "To Do";
      case "In Progress":
        return task.status === "In Progress";
      case "Done":
        return task.status === "Done";
      default:
        return true;
    }
  });

  return (
    <div className="card">
      <h3 className="card-title">Task Manager</h3>
      <div className="position">
        <div>
          <input
            className="size"
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name=""
            id=""
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
            <option value="Documentation">Documentation</option>
            <option value="Refactor">Refactor</option>
            <option value="Test">Test</option>
          </select>
        </div>
        <div className="textArea">
          <textarea
            placeholder="Task description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          style={{ backgroundColor: "rgba(155, 15, 67, 0.46)", color: "white" }}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <div className="tasks-list">
        <div className="location">
          <h3 className="toDo-header">Your Tasks:</h3>

          <div className="gap">
            <button
              style={{ backgroundColor: "rgb(165, 46, 65)", color: "white" }}
              onClick={() => setFilter("All")}
            >
              <option value="All">All</option>
            </button>

            <button
              style={{ backgroundColor: "rgb(229, 124, 170", color: "white" }}
              onClick={() => setFilter("To Do")}
            >
              <option value="To Do">To do</option>
            </button>

            <button
              style={{ backgroundColor: "rgb(210, 124, 229", color: "white" }}
              onClick={() => setFilter("In Progress")}
            >
              <option value="In Progress">In Progress</option>
            </button>

            <button
              style={{ backgroundColor: "rgb(154, 124, 229)", color: "white" }}
              onClick={() => setFilter("Done")}
            >
              <option value="Done">Done</option>
            </button>
          </div>

          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-header">
                  <h4>{task.title}</h4>
                  <button
                    onClick={() => openEditModal(task)}
                    style={{ marginLeft: "10px", padding: "2px 5px" }}
                  >
                    Edit
                  </button>
                </div>
                {task.description && <p>{task.description}</p>}
                <div>
                  <span>Priority: {task.priority} </span>
                  <span style={{ margin: "0 0 0 10px" }}>
                    Status:
                    <select
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value as Status)
                      }
                      style={{ marginLeft: "5px" }}
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </span>
                  <span style={{ margin: "0 0 0 10px" }}>
                    {" "}
                    Category: {task.category}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {editingTask && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              width: "400px",
            }}
          >
            <h4>Edit Task</h4>

            <div style={{ marginBottom: "10px" }}>
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={editingTask?.title ?? ""}
                onChange={handleEditChange}
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Description: </label>
              <textarea
                name="description"
                value={editingTask?.description ?? ""}
                onChange={handleEditChange}
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Category: </label>
              <select
                name="category"
                value={editingTask?.category ?? ""}
                onChange={handleEditChange}
                style={{ width: "100%" }}
              >
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
                <option value="Documentation">Documentation</option>
                <option value="Refactor">Refactor</option>
                <option value="Test">Test</option>
              </select>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Priority: </label>
              <select
                name="priority"
                value={editingTask?.priority ?? ""}
                onChange={handleEditChange}
                style={{ width: "100%" }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label>Status: </label>
              <select
                name="status"
                value={editingTask?.status ?? ""}
                onChange={handleEditChange}
                style={{ width: "100%" }}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => setEditingTask(null)}
                style={{ backgroundColor: "gray", color: "white" }}
              >
                Cancel
              </button>
              <button
                onClick={saveEditedTask}
                style={{ backgroundColor: "purple", color: "white" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default TaskManager;
