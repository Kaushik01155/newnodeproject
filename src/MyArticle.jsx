import { useEffect, useState } from "react";


export function MyArticle() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const storedArticles = JSON.parse(sessionStorage.getItem("articles"));
        setArticles(storedArticles);
    }, []);

    return (
        <div>
            <h2>My Articles</h2>
      
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        articles && articles.map((row) =>{
                            return(<>
                            <tr>
                                <td>{row.user_title}</td>
                                <td>{row.user_description}</td>
                                <td>{row.user_tag}</td>

                            </tr>
                            </>)
                        })
                       }
                    </tbody>
                </table>
       
        </div>
    );
}
