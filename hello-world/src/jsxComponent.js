const name="Peach"

//匯出元件{ShowName}
export function ShowName(){
    //以js寫法撰寫html tag
    //括號內可帶入變數
    return(
        <div>
            <h1>我是jsx ShowName元件</h1>
            <p>Hello,{name}</p>
        </div>
    )
}