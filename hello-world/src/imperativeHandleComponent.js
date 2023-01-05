import { useImperativeHandle,forwardRef, useRef} from "react";

//useImperativeHandle用以對子元件定義子元件要expose的任何屬性
//子元件須配合forwardRef使用
//父元件須配合useRef存取子元件expose出來的屬性

//子元件
const Child = React.forwardRef((props,ref)=>{
    return(
        <input type="text" ref={ref}/>
    )
})

//父元件
function ImperativeHandle(){
    const ref = useRef(null)

    //
    return(
        <Child ref={ref}/>
    )
}