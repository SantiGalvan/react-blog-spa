import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostShow = () => {

    const { slug } = useParams();

    const [post, setPost] = useState(null);

    const fetchPost = async () => {
        const res = await axios.get(`${apiUrl}/posts/${slug}`);
        const newPost = res.data;
        setPost(newPost);
    }

    useEffect(() => {
        fetchPost();
        return () => {
            setPost(null);
        }
    }, [])



    return (
        <section className="container">
            <Card
                isShow={true}
                title={post?.title}
                content={post?.content}
                category={post?.category}
                tags={post?.tags}
                user={post?.user}
                slug={post?.slug}
            />
        </section>
    )
}

export default PostShow;