const Home = () => {
    const handleClick = (ev) => {
        console.log("Hello guys", ev);
    };
    const handleClickAgain = (name, ev) => {
        console.log(`Hello ${name}, ${ev.target}`);
    };
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* For calling another function with an argument, we need an anonymous function to wrap it  */}
            <button onClick={(ev) => handleClickAgain("Mario", ev)}>
                Click me again
            </button>
        </div>
    );
};

export default Home;
