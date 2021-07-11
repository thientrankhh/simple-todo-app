import '../App.css';
import React, { useState } from 'react';

function AddToDo(props) {
    const [title, setTitle] = useState("");

    const onInputChange = e => {
        setTitle(e.target.value)
    }

    const addToDo = e => {
        e.preventDefault();
        props.addToDo(title);
        setTitle("");
    }

    return (
        <form className="form-container" onSubmit={addToDo}>
            <input
                type="text"
                placeholder="Add Todo..."
                className="input-text" 
                value={title}
                onChange={onInputChange}
            />

            <input type="submit" value="Submit" className="input-submit" />
        </form>
    );
}

export default AddToDo;
