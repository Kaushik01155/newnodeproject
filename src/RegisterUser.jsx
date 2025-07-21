import axios from "axios";
import { useEffect, useState } from "react";


export function RegisterUser() {
    const [data, setData] = useState([]);
   
    function getdata()
    {
        axios.get("http://localhost:3000/User")
            .then((response) => {

                if (response.status == 200) {
                    var jsondata = response.data;
                    setData(jsondata);
                }

            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {

        getdata();

    }, [])


    return (<>
        <h1>This Is User Register</h1>
        <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Register Date/Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((row) => {
                        return (<>
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.user_name}</td>
                                <td>{row.user_contact}</td>
                                <td>{row.user_email}</td>
                                <td>{row.user_password}</td>
                                <td>{new Date(row.createdAt).toLocaleString()}</td>
                               

                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    </>)

}