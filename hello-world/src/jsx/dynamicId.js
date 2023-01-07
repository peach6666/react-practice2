//useParams可以取得url的params
import { useParams } from "react-router-dom";

export default function DynamicId(){
    const userId=useParams()
    //userId是一個有id屬性的物件
    console.log(userId)
    return(
        <>
        <h1>UserID:{userId.id}</h1>
        </>
    )
}