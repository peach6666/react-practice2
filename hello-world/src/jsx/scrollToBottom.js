import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToBottom(){
    //取得當前url位址
    const path=useLocation()

    //配合useEffect，當當前位址改變時，捲動到卷軸最下方
    useEffect(()=>{
        window.scrollTo(0,document.body.scrollHeight)},[path]
    )

    return null
}