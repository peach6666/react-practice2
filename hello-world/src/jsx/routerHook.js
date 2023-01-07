import StoreSomething from "./beforUnload"
import ChangeUrl from "./navigate"

export default function RouterHook(){
    return(
        <>
        <h1>RouterHook page</h1>
        <ChangeUrl/>
        <StoreSomething/>
        </>
    )
}