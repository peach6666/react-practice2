import { useEffect, useState } from "react"

export default function Daughter(props){
    //父傳子，子改變父值
    //定義decreaseMoney來接收father的function
    const increaseMoney = ()=>{
        props.increaseDaughter(100)
    }

    //子傳父
    const happy = 700
    const expect = 1000
    const [feeling,setFeeling] = useState("normal")

    //當father給的money變更時渲染，money>700時happy
    useEffect(()=>{
        if(props.money >= happy){
            setFeeling("Happy")
            props.daughterArgue(expect)
            //呼叫父函式的decreaseSon，修改son的money
            props.hitBrother(500)
        }
    },[props.money])

    //點擊會改變父元件的state
    //不可以在這邊的increaseMoney給定父函式參數!
    return(
        <>
        <p>I am Daughter</p>
        <p>Daughter's money:{props.money}</p>
        <p>Brother's money:{props.moneyBrother}</p>
        <p>Daughter's toy:{props.toy}</p>
        <button onClick={increaseMoney}>增加零用錢</button>
        <p>Daughter's mood:{feeling}</p>
        <hr/>
        </>
    )
}