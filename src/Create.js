import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const blog = { title, body, author };
        console.log(blog)
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <label>Blog title</label>
                <textarea
                    required
                    value={body}
                    onChange={(ev) => setBody(ev.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(ev) => setAuthor(ev.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
    );
};

export default Create;
