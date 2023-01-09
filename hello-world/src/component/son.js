import { useEffect, useState} from "react"

export default function Son(props){
    //父傳子，子改變父值
    //定義decreaseMoney來接收father的function
    const decreaseMoney=()=>{
        props.decreaseSon(100)
    }

    //子傳父
    const disappoint = 300
    const expect = 600
    const [feeling,setFeeling] = useState("normal")
    const angry = ()=>{
        console.log("sister is idiot")
    }

    //當father給的money變更時渲染，money<300時disappoint
    useEffect(()=>{
        if(props.money <= disappoint){
            setFeeling("Disappoint")
            props.sonArgue(expect)
            //當錢被sister減少時呼叫angry
            angry()
        }
    },[props.money])

    //onClick綁定自己的decreaseMoney function
    //不可以在這邊的decreaseMoney給定父函式參數!
    return(
        <>
        <p>I am Son</p>
        <p>Son's money:{props.money}</p>
        <p>Son's toy:{props.toy}</p>
        <button onClick={decreaseMoney}>減少零用錢</button>
        <p>Son's mood:{feeling}</p>
        <hr/>
        </>
    )
}