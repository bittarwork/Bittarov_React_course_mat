import logo from './logo.svg';
import './App.css';
import Button from './session one/components/propsAsFunction';
import Greeting from './session one/components/props';
import CounterComponent from "./sessionTow/CounterComponent"
import NameForm from "./sessionTow/NameForm"
import Task from './sessionTow/Task';
import TaskInput from "./sessionTow/TaskInput"
import React, { useState } from 'react';
function App() {
  /* -------------------------------------------------------------------------- */
  /*                            خاص باول او ثاني جلسة                           */
  /* -------------------------------------------------------------------------- */
  // let x = 10;

  // const increment = () => {
  //   for (let i = 0; i < 10; i++) {
  //     x += 10;
  //   }
  //   console.log(x)
  // }
  /* -------------------------------------------------------------------------- */
  /*                         خاص بالتمرين العملي صفحة 34                        */
  /* -------------------------------------------------------------------------- */
  // تعريف الحالة لتخزين قائمة المهام
  const [tasks, setTasks] = useState([]);

  // دالة لإضافة مهمة جديدة
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // دالة لإزالة مهمة من القائمة
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      {/* session one */}
      {/* <Greeting name="osama bittar" className="red" />
      <Button onClick={increment} label="click here" ></Button> */}

      {/* session tow */}
      {/* <CounterComponent></CounterComponent>
      <NameForm></NameForm> */}

      {/* تمرين ص 34 */}
      <h1>تطبيق إدارة المهام</h1>
      <TaskInput addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </ul>

    </div>
  );
}

export default App;
