import React from 'react';

const Action = (pros) => {
    const [name, setName] = React.useState(pros.addTask);
    const { addTask } = pros;

    function handleSubmit(e) {
        e.preventDefault();
        addTask(name);
    }

    // function addTask(input) {
    //     setName(input);
    // }

    function handleChange(e) {
        const {value} = e.target;
        setName(value);
        console.log("changeInput", value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name} onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">Add</button>
        </form>
    )
}

export default Action;