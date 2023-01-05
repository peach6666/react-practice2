import { useState, useEffect } from "react";

//useState為hook的一種
//一般情況下變數會在函式結束時消失
//在functional component最上層呼叫用以加入一些local state(保留變數)
export function StateComponent(){
    //使用陣列解構賦值(方框)
    //useState唯一的argument(可為任意型別)為初始狀態，這邊為0是因計數器從0開始(即count為0)
    //argument只有第一次render才會被用到
    //stateComponent宣告state變數count(可為任意型別)
    //setCount為更新state的function
    const [count,setCount]=useState(0)

    //useEffect為hook的一種，可視為componentDidMount，componentDidUpdate 和 componentWillUnmount 等生命週期的組合。
    //資料fetch、設定subscription、手動改變React component 中的 DOM 都是side effect的範例
    //useEffect會記住傳遞的function(稱為effect)在re-render後呼叫他(第二參數不填則每次更新都會呼叫)
    //在component內部呼叫他可以直接存取state變數或任何props，不需要特殊api去讀取

    //點擊呼叫setCount後，網站title會在re-render後更新
    //參數為useEffect(callback,array(選用))
    useEffect(() => {
        document.title = `You clicked ${count} times`

        //effect的可選清除機制。每個 effect 都可以回傳一個會在它之後執行清除的 function
        //在component unmount時，React會執行清除。但是effect會在每個render中執行，這說明React可以在下次執行effect之前清除前一個render的effect
        return ()=>{
           console.log('Clear done~~~')
           //這個array參數代表僅在array值變更時才執行effect
           //填入count代表僅在count值改變時才執行effect
           //如果是[](空陣列)，則只會執行一次(初次render之後)，等同於componentDidMount
        }},[count]
    )

    //點擊呼叫setCount會傳入新值，re-render stateComponent並傳入新count值取代舊count值
    return(
        <div>
            <h1>useState+useEffect</h1>
            <p>You click {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>
                Increase
            </button>
        </div>
    )
}

//可以在一個組件中宣告多個state變數
function ExampleWithManyStates() {
    const [age, setAge] = useState(42)
    const [fruit, setFruit] = useState('banana')
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])
    //可以單獨更新某一state
    function changeFruit(){
        setFruit('apple')
    }
}