import React from 'react';

const Content = (pros) => {
    const { nameTask } = pros;
    const { id } = pros;
    const { isChecked } = pros;
    const { toggleTaskCompleted } = pros;
    const { deleteTask } = pros;
    return (
        <div>
            <li className="todo stack-small">
                <div className="c-cb">
                    <input type="checkbox" id={id} defaultChecked={isChecked} onChange={() => toggleTaskCompleted(id)} />
                    <label className="todo-label">
                        {nameTask}
                    </label>
                </div>
            </li>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{nameTask}</span>
                </button>
                <button  type="button"
                         className="btn btn__danger"
                         onClick={() => deleteTask(id)}>
                    Delete <span className="visually-hidden">{nameTask}</span>
                </button>
            </div>
        </div>
    )
}

export default Content;