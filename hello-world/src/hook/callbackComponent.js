import React,{ useState, useCallback, useMemo} from "react";
//React.memo是一個HOC，丟入一個元件會經過其處理返回一個新元件
//memo會比較元件中的props有無改變，決定re-render的時機(性能優化)(state、context改變memo無法阻止re-render)

//採用shallow compare，若傳入的props為物件，比較的就是記憶體位置(call by reference)(可以配合useCallback或帶第二參數解決)
//第一參數為要比較的component
//第二參數為自定義的比較函式(選用)，不帶第二參數則比較全部props
//回傳false就會re-render

//元件(第一參數)
function MemoTarget(props){
    return(
        <p>I am MemoTarget</p>
    )
}
//比較函式(第二參數)
function areEqual(prevProps,nextProps){
    //....
}

const memoCompare = React.memo(MemoTarget,areEqual)

//先撰寫沒有 useMemo 也可執行的代碼 — 然後再加入它來做效能最佳化。
//useMemo會暫存函式回傳的值，當前後回傳值不變時不re-render，用於減少重複的複雜計算(如資料量大的map、filter操作)
//第一參數為做計算處理的函式
//第二參數為陣列(選用)，當陣列改變時會重新計算
//不加:每次re-render都會重新計算
//空陣列:如同useEffect只會在初始時渲染一次
export function MemoUse(){
    const [count,setCount] = useState(0)
    //第二參數若是空陣列代表初始渲染一次
    //之後每次return都是一樣的值
    //第二參數若帶count
    //由於每次點擊都改變count值，每次點擊都會re-render
    const memoizedValue = useMemo(() => {
      return Math.random()
    }, [])

    console.log(memoizedValue)
  
    return (
      <div>
        <h1>useMemo</h1>
        <p>MemoUse點擊{count}次</p>
        <button onClick={() => setCount(count + 1)}> Click </button>
      </div>
    )
  }

//寫法:const memorizedCallback=useCallback(
//    ()=>{
//        doSomething(a,b)
//    },[a,b]
//)

//使用時機:通常都是在 function 被當作 prop 傳入子元件時，在父元件用 useCallback 來包住 function 並且傳入 dependency array 來判斷是否重新創建 function
//並且同時搭配 React.memo 包住子元件，來讓在 function 不變時，子元件可以避免重新渲染。
//useCallback會暫存函式，當函式不變時便不re-render

//第一參數為callback function
//第二參數為陣列(選用)
//不加:每次都會重新執行函式去產生新的函式
//空陣列:回傳的函式不會改變
//有加上元素值:當元素值改變時會重新更新回傳的函式

//有bug，先寫著
export function CallbackUse(){
    const [count,setCount] = useState(10)
    const callback = useCallback(()=>{
        console.log('re-render')
    },[count])
    return(
        <div>
            <h1>useCallback</h1>
            <button onClick={callback}>callback</button>
            {count}
            <button onClick={()=>{setCount(count + 1)}}>count+</button>
        </div>
    )
}
//const test = useCallback(callbalck,array)等於const test = useMemo(()=> callback, array)
//useCallback是暫存函式，useMemo則是暫存函式執行後的回傳值