//useLocation可以得到當前的url位址
import { useLocation } from "react-router-dom"

export default function Error404(){
    let errorLocation=useLocation()
    // ex. /jsx/565/51654
    console.log(errorLocation.pathname)
    return(
        <>
        <h1>你走錯地方了</h1>
        <p>{errorLocation.pathname}這邊沒東西</p>
        </>
    )
}