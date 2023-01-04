const name="Peach"

//匯出元件{ShowName}
export function ShowName(){
    return(
        <div>
            <p>▼我是jsx元件</p>
            <p>Hello,{name}</p>
        </div>
    )
}