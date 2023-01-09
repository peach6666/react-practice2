import { useState } from "react"
import Son from "./son"
import Daughter from "./daughter"

export default function Father(props){
    const fatherName = "Father"

    const [money,setMoney] = useState({
        son:600,
        daughter:400
    })

    //父傳函式給子使用
    //定義加減小孩零用錢的函式，以props傳給小孩
    //setMoney部分兩個小孩物件都要定義，否則一個會增減，另一個值會消失
    const decreaseSon = amount=>setMoney(
        {
            son:money.son - amount,
            daughter:money.daughter
        }
    )
    const increaseDaughter = amount=>setMoney(
        {
            son:money.son,
            daughter:money.daughter + amount
        }
    )

    //父使用子函式(父主動觸發子函式decreaseSon、increaseDaughter)，子函式傳回值(expectMoney)給父)
    //sonExpect和daughterExpect的值被father取得並渲染
    const [sonExpect,setSonExpect] = useState(null)
    const [daughterExpect,setDaughterExpect] = useState(null)
    
    const sonArgue = amount=>{
        setSonExpect(amount)
    }
    const daughterArgue = amount=>{
        setDaughterExpect(amount)
    }

    const arr = [1,2,3]
    const arrlist = arr.map(num=><li key={num.toString()}>{num}</li>)

    const toyList = [
        {name:"son",toy:"doll"},
        {name:"daughter",toy:"robot"}
    ]
    //把toyList以<li>列表渲染
    const renderToyList = toyList.map((toyList)=>{
        return(
            <li key={toyList.name}>{toyList.toy} belongs to {toyList.name}</li>
        )
    })

    //在父元件Father中引入Son和Daughter元件，給予props(money、toyList、decreaseSon、increaseDaughter)
    //hitBrother綁定decreaseSon，讓daughter可以控制son在父元件的money值，son再經由props拿到father給的money
    //在daughter上綁定moneyBrother取得brother的money，當daughter hitBrother後，取得的moneyBrother跟son拿到的props.money都會被一同修改
    return(
        <div>
            <h1>I am {fatherName}</h1>
            <p>Son's money:{money.son}</p>
            <p>Daughter's money:{money.daughter}</p>
            <ul>{arrlist}</ul>
            <ul>ToyList:{renderToyList}</ul>
            <p>Son's expect:{sonExpect}</p>
            <p>Daughter's expect:{daughterExpect}</p>
            <hr/>
            <Son money={money.son} toy={toyList[0].toy} decreaseSon={decreaseSon} sonArgue={sonArgue}/>
            <Daughter money={money.daughter} toy={toyList[1].toy} increaseDaughter={increaseDaughter} daughterArgue={daughterArgue} hitBrother={decreaseSon} moneyBrother={money.son}/>
        </div>
    )
}