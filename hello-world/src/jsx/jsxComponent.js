import { Link , Outlet} from "react-router-dom"
const name="Peach"

//匯出元件{ShowName}
export function ShowName(){
    //以js寫法撰寫html tag
    //括號內可帶入變數
    //Outlet寫在父頁面，導入子頁面時才能成功渲染
    return(
        <>
            <Link to="jsxChild">jsxChild</Link>
            <h1>我是jsx ShowName元件</h1>
            <p>Hello,{name}</p>
            <Outlet/>
        </>
    )
}