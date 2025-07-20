import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Addproduct() {

   
    const [formInput, setFormInput] = useState({
        "product_name": "",
        "product_price": 0.0,
        "product_description": ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

   

    const handleClick = (e) => {
        e.preventDefault();
        // var params = {
        //     "product_name":formInput.productname,
        //     "product_price":formInput.price,
        //     "product_description":formInput.description
        // };
        axios.post("http://localhost:3000/addProduct",formInput).then((response)=>{

            if(response.status==201)
                {
                    var json = response.data;
                    if(json.status == true)
                    {
                        var message = json.message;
                        alert(message);
                    }
                    else
                    {
                        var message = json.message;
                        alert(message);
                    }

                    setFormInput({
                        "product_name": "",
                        "product_price": 0.0,
                        "product_description": ""
                    });
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
                <td><button>Submit</button></td>
            </tr>


        </form>


    </>)
}