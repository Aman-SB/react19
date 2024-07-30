import React from "react";

const TodoItem = ({setText , handleSubmit}) => {
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
};

export default TodoItem;
