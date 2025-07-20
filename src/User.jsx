   
  import axios from "axios"
  import { useEffect, useState } from "react" 
   
   export function User(){

        const [data, setData] = useState([]);
    
        useEffect(() => {
    
            axios.get("https://dummyjson.com/users")
                .then((response) => {
    
                    if (response.status == 200) {
                        var jsondata = response.data.users;
                        setData(jsondata);
                    }
    
                }).catch((error) => {
                    console.log(error);
                })
    
        }, [])
    
        return (<>
            <h1>This Is Users</h1>
            <table className="table">
    
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Image</th>
                        <th>HairColor</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postcode</th>
                        <th>CompanyName</th>
                       

    
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((row) => {
                            return (<>
                                <tr>
                                <td>{row.id}</td>
                                <td>{row.firstName} {row.lastName} {row.maidenName}</td>
                                <td>{row.age}</td>
                                <td>{row.gender}</td>
                                <td><img src={row.image}  /></td>
                                <td>{row.hair.color}  {row.hair.type}</td>
                                <td>{row.address.city}</td>
                                <td>{row.address.state}</td>
                                <td>{row.company.address.postalCode}</td>
                                <td>{row.company.name}</td>
                                
                                </tr>
                            </>)
                        })   
                    }
                </tbody>
            </table>
        </>)
    }