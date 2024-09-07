import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-xl font-bold text-gray-700 mb-4">المهام الحالية</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-3 bg-gray-100 rounded-md shadow-sm text-lg font-medium"
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
