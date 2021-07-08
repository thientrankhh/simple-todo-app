import '../App.css';

function AddToDo() {
    return (
        <form className="form-container">
            <input
                type="text"
                placeholder="Add Todo..."
                className="input-text" />

            <input type="submit" value="Submit" className="input-submit" />
        </form>
    );
}

export default AddToDo;
