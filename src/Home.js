import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My new website!",
            body: "Lorem ipsum...",
            author: "Mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "Lorem ipsum...",
            author: "Luigi",
            id: 2,
        },
        {
            title: "Web dev top tips!",
            body: "Lorem ipsum...",
            author: "Mario",
            id: 3,
        },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(()=>{
        console.log('useEffect ran')
        console.log(blogs)
    });


    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All Blogs!"
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Home;
