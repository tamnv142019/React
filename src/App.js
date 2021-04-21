import './App.css';
import Home from './pages/Home';
import User from './pages/User';
import Header from './pages/Header';
import Action from './pages/Action';
import React from "react";
import Content from "./pages/Content";
import { nanoid } from "nanoid";

function App(props) {
    // const taskList = props.tasks.map(task => task.name);
    const [tasks, setTasks] = React.useState(props.tasks);
    const taskList = tasks.map(task => (
        <Content id={task.id} nameTask={task.name} isChecked={task.completed} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask}/>
    ));
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';

    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    function addTask(name) {
        debugger
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        alert(id)
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    return (
        <div className="App">
            <Header />
            <Action addTask={addTask}/>
            <br/>
            <h2 id="list-heading">
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {/*<Content nameTask="Eat" isChecked="true" id="todo-0"/>*/}
                {/*<Content nameTask="Sleep" id="todo-1"/>*/}
                {/*<Content nameTask="Go" id="todo-2"/>*/}
                {taskList}
            </ul>
        </div>
    );
}

export default App;
