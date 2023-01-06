import React,{ forwardRef, useImperativeHandle, useRef, useState} from "react";

//useImperativeHandle用以對子元件定義子元件要expose的任何屬性
//子元件須配合forwardRef使用
//父元件須配合useRef存取子元件expose出來的屬性

//子元件
//一般component不會取得ref屬性，需以forwardRef包起來才有
//forwardRef用於自動傳遞ref值給他的父元件
//以Child配合forwardRef包裹住ChildFunc
const Child = forwardRef(
    function ChildFunc(props,ref){
        //子元件綁定ref(<input> dom)
        const outputRef=useRef(null)
        useImperativeHandle(ref,()=>({
            something:"banana",
            consoleFunc:()=>{
                console.log("father get this func!")
            }
        }))
        return(
            <input type="checkbox" name="checkbox~~" ref={outputRef}/>
        )
    }
)

//父元件
//使用useRef建立ref
export function ImperativeHandle(){
    const childRef = useRef(null)
    //將從子元件得到的ref綁定至父元件useRef的變數childRef
    return(
        <div>
            <h1>useImperativeHandle</h1>
            <Child ref={childRef}/>
            <button onClick={()=>{console.log(childRef.current)}}>getChildRef</button>
        </div>
    )
}