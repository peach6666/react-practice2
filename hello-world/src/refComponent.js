import React, { useRef } from "react";

//useRef可用來回傳DOM，會回傳一個只有current屬性的ref object，可以得到首次render的DOM節點
//userRef也可以儲存資料或獲取以前的值
//若props或state無法處理再來使用
//第一個參數為初始值，通常設為null，若設為boolean可避免首次render
export function RefUse(){
    const ref=useRef(null)
    //ref.current為input的DOM(<input type="text">)
    return(
        <div>
            <h1>useRef</h1>
            <input type="text" ref={ref} />
            <button onClick={() => console.log(ref.current)}>getRef</button>
        </div>
    )
}