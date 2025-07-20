import axios from "axios"
import { useEffect, useState } from "react"

export function Product2() {


    const [data, setData] = useState();

    useEffect(() => {

        axios.get("https://dummyjson.com/products")
            .then((response) => {

                if (response.status == 200) {
                    var jsondata = response.data.products;
                    setData(jsondata);
                }

            }).catch((error) => {
                console.log(error);
            })

    }, [])

    return (<>
        <h1>This Is Product2</h1>
      
        <table className="table">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tital</th>
                    <th>Price</th>
                    <th>Dimantion</th>
                    

                    
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((row) => {
                        return (<>
                            <tr>
                                <td>{row.id}</td>
                                <td>{row.title}</td>
                                <td>{row.price}</td>
                                <td>{row.dimensions ?
                                    `${row.dimensions.width} * ${row.dimensions.height} * ${row.dimensions.depth}` : "n/a"}   </td>

                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    </>)

}