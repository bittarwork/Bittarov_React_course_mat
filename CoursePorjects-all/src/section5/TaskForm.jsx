import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-lg w-full"
    >
      <input
        type="text"
        className="border p-3 w-full mb-4 rounded-md"
        placeholder="أضف مهمة جديدة"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 w-full rounded-md hover:bg-blue-600"
      >
        أضف المهمة
      </button>
    </form>
  );
};

export default TaskForm;
