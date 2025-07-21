import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function Editproduct() {


    const {id} = useParams();
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        "product_name": "",
        "product_price": 0.0,
        "product_description": ""
    })


    useEffect(()=>{

        axios.get(`http://localhost:3000/singleProduct/${id}`).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                if(json.status)
                {
                    let product_name = json.data.product_name;
                    let product_price = json.data.product_price;
                    let product_description = json.data.product_description;
                    setFormInput(prevState=> ({
                        ...prevState,
                        "product_name":product_name,
                        "product_price":product_price,
                        "product_description":product_description
                    }));
                }
            }
        })


    },[id])




    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


   

    const handleClick = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3000/updateProduct/${id}`,formInput).then((response)=>{

            if(response.status==200)
                {
                    var json = response.data;
                    if(json.status )
                    {
                            navigate("/product");
                        
                    }
                   

                    // setFormInput({
                    //     "product_name": "",
                    //     "product_price": 0.0,
                    //     "product_description": ""
                    // });
                }

        }).catch((error)=>{
            console.log(error);
        })

      }




    return (<>

        <form method="post" onSubmit={handleClick}>

            <tr><td> <label >Product Name </label></td>
                <td> <input type="text" name="product_name" value={formInput.product_name} onChange={handleInput}  ></input> </td></tr>

            <tr>  <td><label >Price </label></td>
                <td> <input type="number" name="product_price" value={formInput.product_price} onChange={handleInput} ></input></td></tr>
            <tr>
                <td> <label >Description </label></td>
                <td> <input type="text" name="product_description" value={formInput.product_description} onChange={handleInput} ></input> </td>
            </tr>
          
            <tr>
                <td><button type="submit">Update</button></td>
            </tr>


        </form>


    </>)
}