import { useReducer } from "react";
//useReducer為useState的替代方案
//當需要複雜的state邏輯而且包括多個子數值或下一個state依賴之前的state，useReducer會比useState更適用。
//useReducer可以讓你觸發深層更新的component作效能的最佳化，因為你可以傳遞dispatch而不是callback。

//寫法:const [state, dispatch] = useReducer(reducer, initialState, initialStateFunction)

//num為初始state
const num = {count: 0}

//加減函式
//state的值由localState傳入
function computed(state,action){
    //按鈕dispatch時傳type，switch依照type值進行加或減
    switch(action.type){
        case 'increment':
            return {count:state.count++}
        case 'decrement':
            return {count:state.count--}
    }
}
export function Counting(){
    //useReducer第一個參數(computed)用來設定變更state的規則(加減state)
    //第二個參數num作為初始state
    //第三個參數是初始化state的函式(選用)
    //localState的值由num傳入
    //dispatch用以觸發computed函式的第二參數action
    const [localState, dispatch] = useReducer(computed, num)
    return(
        <div>
            <h1>useReducer</h1>
            Count:{localState.count}
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        </div>
    )
}
