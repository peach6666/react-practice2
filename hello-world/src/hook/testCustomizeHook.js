import { useConsole } from './customizeHookComponent'

export function CustomizeUse(){
    useConsole('Banana!!!')
    return(
        <div>
            <h1>useCustomizeHook</h1>
            <p>Console Banana</p>
        </div>
    )
}