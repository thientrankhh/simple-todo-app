import '../App.css';
import ToDoItem from './ToDoItem';

function ToDo(props) {
    return (
        <div>
            <ul>
                {props.todos.map((todo) => (
                    <ToDoItem 
                        key={todo.id}
                        todo={todo} 
                        handleChange={props.handleChange}
                        deleleToDo={props.deleleToDo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
