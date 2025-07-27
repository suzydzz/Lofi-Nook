import React from "react";
import type { Status, TaskItem } from "../../types/taskTypes";

interface StatusSelectProps {
  task: TaskItem;
  onStatusChange: (id: number, newStatus: Status) => void;
}

export const StatusSelect: React.FC<StatusSelectProps> = ({
  task,
  onStatusChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // Явная проверка типа статуса
    if (value === "To Do" || value === "In Progress" || value === "Done") {
      onStatusChange(task.id, value as Status);
    }
  };

  return (
    <select
      value={task.status}
      onChange={handleChange}
      style={{ marginLeft: "5px" }}
      
    >
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};
