import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Article() {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const [formInput, setFormInput] = useState({
        article_title: "",
        article_description: "",
        article_tag: "",
        articleuser_id: userId || "",
        token: token || ""
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        if (!userId || !token) {
            navigate("/login");
        } else {
            getdata();
        }
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();

        const payload = {
            ...formInput,
            articleuser_id: userId,
            token: token
        };

        axios.post("http://localhost:3001/api/articles", payload)
            .then((resp) => {
                if (resp.status === 200 && resp.data.status === true) {
                    alert(resp.data.message);
                    setFormInput({
                        article_title: "",
                        article_description: "",
                        article_tag: "",
                        articleuser_id: userId,
                        token: token
                    });
                    getdata();
                } else {
                    alert(resp.data.message);
                }
            })
            .catch((error) => {
                console.error("Article post error:", error);
            });
    };

    const getdata = () => {
        alert(token);
        axios.post("http://localhost:3001/api/articlebyuser", {
            token: token
        })
        .then((resp) => {
            if (resp.status === 200 && resp.data.status === true) {
                setData(resp.data.data);
            } else {
                alert(resp.data.message);
            }
        })
        .catch((error) => {
            console.error("Error fetching user articles:", error);
        });
    };

    return (
        <>
            <form onSubmit={handleClick}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Title</label></td>
                            <td><input type="text" name="article_title" value={formInput.article_title} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td><label>Description</label></td>
                            <td><input type="text" name="article_description" value={formInput.article_description} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td><label>Tags</label></td>
                            <td><input type="text" name="article_tag" value={formInput.article_tag} onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button type="submit">Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <div>
                <h2>My Articles</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Tag</th>
                            <th>UserId</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.article_title}</td>
                                    <td>{row.article_description}</td>
                                    <td>{row.article_tag}</td>
                                    <td>{row.articleuser_id}</td>
                                    <td>
                                        {row.article_image && <img src={row.article_image} width={200} alt="Article" />}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
