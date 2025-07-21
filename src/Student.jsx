import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Student() {
    const [formInput, setFormInput] = useState({
        "student_name": "",
        "student_rollno": 0.0,
        "student_gujarati": "",
        "student_hindi": "",
        "student_english": ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value,


        }))
    }



    const handleClick = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/resultStudent", formInput).then((resp) => {

            if (resp.status == 201) {
                let json = resp.data;
                if (json.status == true) {
                    var message = json.message;
                    alert(message);
                    getdata();
                }
                else {
                    var message = json.message;
                    alert(message);
                }

                setFormInput({
                    "student_name": "",
                    "student_rollno": 0.0,
                    "student_gujarati": "",
                    "student_hindi": "",
                    "student_english": ""
                });

            }
        }).catch((error) => {
            console.log(error);
        })

    }


    // const navigate = useNavigate();



    //     const handleclick = (e)=>{

    //         e.preventDefault();

    //         navigate("/studentdata");
    //     } 
    const [data, setData] = useState([]);

    useEffect(() => {
        getdata();

    }, []);


    function getdata() {
        axios.get("http://localhost:3000/addStudentdata")
            .then((resp) => {
                if (resp.status == 200) {
                    var jsondata = resp.data;
                    setData(jsondata)
                }

            }).catch((error) => {
                console.log(error)
            })
    }


    return (<>
        <form method="post" onSubmit={handleClick}>

            <tr><td> <label > Name </label></td>
                <td> <input type="text" name="student_name" value={formInput.student_name} onChange={handleInput}  ></input> </td></tr>

            <tr>  <td><label >Roll NO </label></td>
                <td> <input type="number" name="student_rollno" value={formInput.student_rollno} onChange={handleInput} ></input></td></tr>
            <tr>
                <td> <label >Gujarati </label></td>
                <td> <input type="number" name="student_gujarati" value={formInput.student_gujarati} onChange={handleInput} ></input> </td>
            </tr>
            <tr>
                <td> <label >Hindi </label></td>
                <td> <input type="number" name="student_hindi" value={formInput.student_hindi} onChange={handleInput} ></input> </td>
            </tr>
            <tr>
                <td> <label >English </label></td>
                <td> <input type="number" name="student_english" value={formInput.student_english} onChange={handleInput} ></input> </td>
            </tr>

            <tr>
                <td><button>Submit</button></td>
            </tr>


        </form>

        {/* <button type="submit" onClick={handleclick}>ADD Student</button> */}

        <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Gujarati</th>
                    <th>hindi</th>
                    <th>english</th>
                    <th>Total</th>
                    <th>persentage</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((row) => {
                        var total = Number(row.student_gujarati) + Number(row.student_hindi) + Number(row.student_english);
                        let per = total / 300 * 100;


                        return (<>
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.student_name}</td>
                                <td>{row.student_rollno}</td>
                                <td>{row.student_gujarati}</td>
                                <td>{row.student_hindi}</td>
                                <td >{row.student_english}</td>
                                <td>{total}</td>
                                <td>{per}</td>
                                <td><button>Delete</button></td>

                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>

    </>)
}