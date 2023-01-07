import { Link , Outlet} from "react-router-dom"
import { useLocation } from "react-router-dom"

const name="Peach"

//匯出元件{ShowName}
export function ShowName(){
    //用loction接收navigate傳遞的payload，但是沒接收前讀不到state的值
    const location = useLocation()
    console.log(location.state)
    //以js寫法撰寫html tag
    //括號內可帶入變數
    //Outlet寫在父頁面，導入子頁面時才能成功渲染
    return(
        <>
            <Link to="routerHook">RouterHook</Link>
            <h1>我是jsx ShowName元件</h1>
            <p>Hello,{name}</p>
            <Outlet/>
        </>
    )
}