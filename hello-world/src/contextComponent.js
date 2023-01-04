import { useContext, createContext } from "react"
//ContextExample作為context object傳給子孫輩
//Context可解決props需一層一層傳遞的複雜性
const slogan = "flypa!!!"

//createContext用以註冊ContextExample(預設值為slogan)為Context
export const ContextExample=createContext(slogan)
//設定displayName讓react dev tool可以正確辨別多個context的名稱
ContextExample.displayName='ContextExample'

//ContextComponent作為爺輩
export function ContextComponent(props){
    return(
        //Provider為提供者，讓其子孫輩component都可取用value的值
        //Provider可以複數個做成巢狀，內層以下的Consumer會拿到內層Provider的value，夾在內外層中間的Consumer會拿到外層的value
        //一旦Provider的value值改變，其底下接收其值的Consumer必定會re-render(避免inline賦值給value，否則容易造成效能問題)
        <ContextExample.Provider value={slogan}>
            <ContextChild/>
        </ContextExample.Provider>
    )
}
//ContextChild作為父輩
export function ContextChild(props){
    return(
        <div>
            <ContextGrandson/>
        </div>
    )
}
//ContextGrandson作為子輩，不需父輩提供props也可以取用爺輩context
export function ContextGrandson(props){
    //取用爺輩context，此方法優於Consumer方法
    const title=useContext(ContextExample)
    return(
        <div>
            {title}
        </div>
    )
}