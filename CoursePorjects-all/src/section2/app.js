import logo from './logo.svg';
import './App.css';

import CounterComponent from "./sessionTow/CounterComponent"
import NameForm from "./sessionTow/NameForm"
import Task from './sessionTow/Task';
import TaskInput from "./sessionTow/TaskInput"


function App() {
    return (
        <div className="">
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
        </div>
    );
}

export default App;
