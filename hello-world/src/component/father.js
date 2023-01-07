import { useState } from "react"
import Son from "./son"
import Daughter from "./daughter"

export default function Father(props){
    const fatherName = "Father"

    const [money,setMoney] = useState({
        son:600,
        daughter:400
    })

    const decreaseSon = amount=>setMoney({son:amount})

    const toyList = [
        {name:"son",toy:"doll"},
        {name:"daughter",toy:"robot"}
    ]
    const arr = [1,2,3]
    const arrlist = arr.map(num=><li key={num.toString()}>{num}</li>)
    const renderToyList = toyList.map((toyList)=>{
        return(
            <li key={toyList.name}>{toyList.toy} belongs to {toyList.name}</li>
        )
    })

    //在父元件Father中引入Son和Daughter元件，給予props(money)
    return(
        <div>
            <h1>I am {fatherName}</h1>
            <p>Son's money:{money.son}</p>
            <p>Daughter's money:{money.daughter}</p>
            <ul>{arrlist}</ul>
            <ul>ToyList:{renderToyList}</ul>
            <hr/>
            <Son money={money.son} toy={toyList[0].toy}/>
            <Daughter money={money.daughter} toy={toyList[1].toy}/>
            <button onClick={decreaseSon}></button>
        </div>
    )
}