import Form from "../components/Form/Form";
import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostCreate = () => {

    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const res = await axios.get(`${apiUrl}/tags`);
        const apiTags = res.data;
        setTags(apiTags);
    }

    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        const res = await axios.get(`${apiUrl}/categories`);
        const apiCategories = res.data;
        setCategories(apiCategories);
    }

    useEffect(() => {
        fetchTags();
        fetchCategories();
    }, [])

    return (
        <section className="container">
            <Form
                tags={tags}
                categories={categories}
            />
        </section>
    )
}

export default PostCreate;