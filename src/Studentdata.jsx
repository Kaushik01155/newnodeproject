import axios from "axios";
import {  useState } from "react";

export function Studentdata(){
 const [formInput, setFormInput] = useState({
        "student_name": "",
        "student_rollno": 0.0,
        "student_gujarati": "",
        "student_hindi":"",
        "student_english":""
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
        
        axios.post("http://localhost:3000/resultStudent",formInput).then((resp)=>{

            if(resp.status==201)
            {
                let json = resp.data;
                if(json.status==true)
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
                    "student_name": "",
                    "student_rollno": 0.0,
                    "student_gujarati": "",
                    "student_hindi":"",
                    "student_english":""
            });

            }
        }).catch((error)=>{
            console.log(error);
        })

      }



      




    return(<>
    
    
    <form method="post" onSubmit={handleClick}>

<tr><td> <label > Name </label></td>
    <td> <input type="text" name="student_name" value={formInput.student_name} onChange={handleInput}  ></input> </td></tr>

<tr>  <td><label >Roll NO </label></td>
    <td> <input type="number" name="student_rollno" value={formInput.student_rollno} onChange={handleInput} ></input></td></tr>
<tr>
    <td> <label >Gujarati </label></td>
    <td> <input type="text" name="student_gujarati" value={formInput.student_gujarati} onChange={handleInput} ></input> </td>
</tr>
<tr>
    <td> <label >Hindi </label></td>
    <td> <input type="text" name="student_hindi" value={formInput.student_hindi} onChange={handleInput} ></input> </td>
</tr>
<tr>
    <td> <label >English </label></td>
    <td> <input type="text" name="student_english" value={formInput.student_english} onChange={handleInput} ></input> </td>
</tr>

<tr>
    <td><button>Submit</button></td>
</tr>


</form>



    
    </>)
}