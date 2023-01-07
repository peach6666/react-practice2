//useBeforeUnload儲存重要的本地狀態(如保存到瀏覽器的local storage(表單輸入值等))
import { useBeforeUnload, Link} from "react-router-dom";
import { useState, useCallback, useEffect} from "react";

export default function StoreSomething(){
    const [password,setPassword] = useState(null)

    //配合useCallBack記錄下剛剛儲存的密碼
    useBeforeUnload(
        useCallback(()=>{
            localStorage.stuff = password
        },[password])
    )

    //在重新回到輸入密碼頁面時，設定剛剛儲存好的密碼
    useEffect(()=>{
        if(password === null && localStorage.stuff !== null){
            setPassword(localStorage.stuff)
        }
    },[password])

    return(
        <>
        <input type="password" placeholder="輸入密碼" maxLength="6" required></input>
        <Link to="/jsx">回到上一頁</Link>
        </>
    )
}