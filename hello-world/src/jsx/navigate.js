import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//useNavigate可以控制頁面改變url
//應避免使用button進行導頁
export default function ChangeUrl(){
    const navigate = useNavigate()
    //設定goback初始值為false
    const [goback,setGoback]=useState(false)
    //點擊按鈕改變goback為true
    const toggle=()=>{
        setGoback(true)
    }
    //goback為true，導至首頁
    //第二參數可以傳遞payload給第一參數的路徑
    useEffect(()=>{
        if(goback){
            navigate('/jsx',{state:{name:"PEACH"}})
        }
    })
    
    return(
        <button onClick={toggle}>回到jsx</button>
    )
}