import { StateComponent } from './stateComponent';
import { ContextChild, ContextComponent, ContextGrandson } from './contextComponent';
import { Counting } from './reduceComponent';
import { MemoUse, CallbackUse} from './callbackComponent';
import { RefUse } from './refComponent';
import { ImperativeHandle } from './imperativeHandleComponent';
import { IdUse } from './useIdComponent';
import { CustomizeUse } from './testCustomizeHook';
import * as styled from '../App.css';

export default function HookPage(){
    return(
        <>
            <StateComponent/>
            <ContextComponent/>
            <ContextChild/>
            <ContextGrandson/>
            <Counting/>
            <MemoUse/>
            <CallbackUse/>
            <RefUse/>
            <ImperativeHandle/>
            <IdUse/>
            <CustomizeUse/>
        </>
    )
}