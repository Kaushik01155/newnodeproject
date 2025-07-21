import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {

    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        "user_name": "",
        "user_mobileNo": "",
        "user_email": "",
        "user_password": ""
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
   
    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/register", formInput).then((resp) => {

            if (resp.status == 200) {
                let json = resp.data;
                if (json.status == true) {
                    var message = json.message;
                    alert(message);
                    // getdata();
                }
                else {
                    var message = json.message;
                    alert(message);
                }

                setFormInput({
                    "user_name": "",
                    "user_mobileNo": "",
                    "user_email": "",
                    "user_password": ""
                });
                 navigate("/login");
            }
        }).catch((error) => {
            console.log(error);
        })

    }


    return (<>


        <form method="post" onSubmit={handleClick}>

            <tr><td> <label > Name </label></td>
                <td> <input type="text" name="user_name" value={formInput.user_name} onChange={handleInput}  ></input> </td></tr>
            <tr>
                <td> <label >Email </label></td>
                <td> <input type="email" name="user_email" value={formInput.user_email} onChange={handleInput} ></input> </td>
            </tr>
            
            <tr>  <td><label > Mobile No </label></td>
                <td> <input type="number" name="user_mobileNo" value={formInput.user_mobileNo} onChange={handleInput} ></input></td></tr>
          
            <tr>
                <td> <label >Password </label></td>
                <td> <input type="password" name="user_password" value={formInput.user_password} onChange={handleInput} ></input> </td>
            </tr>
            

            <tr>
                <td><button>Submit</button></td>
            </tr>
        </form>
    </>)
}