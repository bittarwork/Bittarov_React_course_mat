import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // جلب المهام من API وهمي
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // إضافة مهمة جديدة
  const addTask = (newTask) => {
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-white mb-6">قائمة المهام</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
