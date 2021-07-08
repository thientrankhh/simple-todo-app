import '../App.css';
import ToDoItem from './ToDoItem';

function ToDo(props) {
    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    <ToDoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
