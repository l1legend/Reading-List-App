import { useState } from "react";

function BookCreate({ onCreate }) {
    // State to hold the title input value
    const [title, setTitle] = useState('');
    
    // Event handler to update the title state when the input value changes
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // Event handler to handle form submission
    const handleSubmit = (event) => { 
        event.preventDefault();  // Prevents the default form submission behavior
        onCreate(title);         // Calls the onCreate function passed as a prop
        setTitle('');            // Resets the title input value
    };

    return <div className="book-create">
        <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
}

export default BookCreate;