import { useState } from "react";
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
            author: "Wario",
            id: 3,
        },
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
};

export default Home;
