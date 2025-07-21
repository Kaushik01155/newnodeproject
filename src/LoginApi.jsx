import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function LoginApi() {

    const navigate = useNavigate();
   
     const [formInput, setFormInput] = useState({
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
            
          axios.post("http://localhost:3001/api/login",formInput).then((response)=>{
           
               if (response.status == 200) {
                let json = response.data;
                if (json.status == true) {
                    var message = json.message;
                    sessionStorage.setItem("islogin","yes");
                    sessionStorage.setItem("id",json.data._id);
                    sessionStorage.setItem("name",json.data.user_name);
                     sessionStorage.setItem("token", json.token);
                    window.location="/article";
                    //navigate("/");
                    // getdata();
                }
                else {
                    var message = json.message;
                    alert(message);
                }

                setFormInput({
                    "user_email": "",
                    "user_password": ""
                });
                 
            }
          })
          .catch((error)=>{
            console.error("Login error:", error);
          })
        }

    return (<>
        <form method="post" onSubmit={handleClick}>

           <tr>
                <td> <label >Email </label></td>
                <td> <input type="email" name="user_email" value={formInput.user_email} onChange={handleInput} ></input> </td>
            </tr>
            <tr>
                <td> <label >Password </label></td>
                <td> <input type="password" name="user_password" value={formInput.user_password} onChange={handleInput} ></input> </td>
            </tr>
            <tr>
                <td><button>Login</button></td>
            </tr>
        </form>

    </>)
}