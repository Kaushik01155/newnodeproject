import { useParams } from "react-router-dom";

export function Productdetail(){
    const {id} = useParams();
    return(<>
   <h1>Product Detail</h1>
   <h2>{id}</h2>
    

    

    </>)
}