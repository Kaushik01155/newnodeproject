import axios from "axios"
import { useEffect, useState } from "react"

export function Categorys() {

    const [data, setData] = useState();



    function getdata() {
        axios.get("http://localhost:3001/api/category")
            .then((response) => {

                if (response.status == 200) {
                    var jsondata = response.data;
                    setData(jsondata);
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getdata();

    }, [])


    return (<>

        <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
        <tbody>
            {
                data && data.map((row)=>{
                    return(<>
                    <tr>
                        <td>{row._id}</td>
                        <td>{row.category_name}</td>

                    </tr>
                    
                    </>)
                })
            }
        </tbody>
        </table>
    </>)

}