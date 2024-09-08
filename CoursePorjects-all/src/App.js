import logo from './logo.svg';
import './App.css';
// import Button from './session one/components/propsAsFunction';
// import Greeting from './session one/components/props';
// import CounterComponent from "./sessionTow/CounterComponent"
// import NameForm from "./sessionTow/NameForm"
// import Task from './sessionTow/Task';
// import TaskInput from "./sessionTow/TaskInput"
// import React, { useState } from 'react';
import ProfileCard from "./section4/ProfileCard"

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
  // const [tasks, setTasks] = useState([]);

  // // دالة لإضافة مهمة جديدة
  // const addTask = (task) => {
  //   setTasks([...tasks, task]);
  // };

  // // دالة لإزالة مهمة من القائمة
  // const removeTask = (index) => {
  //   const newTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(newTasks);
  // };
  /* -------------------------------------------------------------------------- */
  /*                                section four                                */
  /* -------------------------------------------------------------------------- */
  const userData = {
    image: "https://via.placeholder.com/300",
    name: "Osama Bittar",
    shortDescription: "مطور ويب محترف ومدرس كورسات متقدمة في React و Tailwind CSS.",
    longDescription:
      "أعمل كمدرس لكورسات تطوير الويب وأساعد المطورين الجدد على فهم أساسيات تطوير الواجهات باستخدام React و Tailwind CSS. لدي خبرة طويلة في إنشاء تطبيقات ويب متقدمة وأعشق تحسين تجربة المستخدم من خلال التصميمات النظيفة والتفاعلية."
  };
  return (
    <div className="">
      {/* session one */}
      {/* <Greeting name="osama bittar" className="red" />
      <Button onClick={increment} label="click here" ></Button> */}

      {/* session tow */}
      {/* <CounterComponent></CounterComponent>
      <NameForm></NameForm> */}

      {/* تمرين ص 34 */}
      {/* <h1>تطبيق إدارة المهام</h1>
      <TaskInput addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onRemove={() => removeTask(index)} />
        ))}
      </ul> */}

      {/* section four:  */}

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
        <ProfileCard
          image={userData.image}
          name={userData.name}
          shortDescription={userData.shortDescription}
          longDescription={userData.longDescription}
        />
      </div>
    </div>
  );
}

export default App;
