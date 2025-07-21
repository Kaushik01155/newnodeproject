import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function Product() {
    const navigate = useNavigate();
    const handleclick = (e) => {

        e.preventDefault();

        navigate("/addproduct");
    }

    const handleEdit = (id)=>{
        navigate(`/editproduct/${id}`)
    }

    const [data, setData] = useState();


    function getdata()
    {
        axios.get("http://localhost:3001/api/product")
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


    function handleDelete(id)
    {
        axios.get(`http://localhost:3000/deleteProduct/${id}`).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                if(json.status == true)
                {
                    var message = json.message;
                    alert(message);
                    getdata();
                }
                else
                {
                    var message = json.message;
                    alert(message);
                }
            }
          
        }).catch((error)=>{
            console.log(error);
        })
    }
   
   

    return (<>
        <h1>This Is Product</h1>
        <button type="submit" onClick={handleclick} >Add Product</button>

        <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((row) => {
                        return (<>
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.product_name}</td>
                                <td>{row.product_price}</td>
                                <td>{row.product_description}</td>
                                <td><button onClick={(e)=>handleDelete(row._id)}>Delete</button></td>
                                <td> <button onClick={(e)=>handleEdit(row._id)}>Edit</button></td>

                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    </>)

}