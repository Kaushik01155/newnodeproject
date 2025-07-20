   
  import axios from "axios"
  import { useEffect, useState } from "react" 
   
   export function Todo(){

        const [data, setData] = useState([]);
    
        useEffect(() => {
    
            axios.get("https://dummyjson.com/todos")
                .then((response) => {
    
                    if (response.status == 200) {
                        var jsondata = response.data.todos;
                        setData(jsondata);
                    }
    
                }).catch((error) => {
                    console.log(error);
                })
    
        }, [])
    
        return (<>
            <h1>This Is Todos</h1>
            <table className="table">
    
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Todo</th>
                        <th>Completed</th>
                        <th>UserId</th>
    
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((row) => {
                            return (<>
                                <tr>
                                <td>{row.id}</td>
                                    <td>{row.todo}</td>
                                    <td>{row.completed ? "true" : "false"}</td>
                                    <td>{row.userId}</td>

                                
                                </tr>
                            </>)
                        })   
                    }
                </tbody>
            </table>
        </>)
    }