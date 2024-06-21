import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Posts = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const res = await axios.get(`${apiUrl}/posts`);
        const newPosts = res.data.data;
        setPosts(newPosts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="container">
            <div className="row g-4">
                <h1 className="text-center mb-2">Lista dei Posts</h1>
                {posts?.map(({ id, title, content, category, tags, user, slug }) => (
                    <div key={id} className="col-4">
                        <Card
                            title={title}
                            content={content}
                            category={category}
                            tags={tags}
                            user={user}
                            slug={slug}
                        />
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Posts;