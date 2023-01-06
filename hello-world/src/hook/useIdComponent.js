import {useId} from "react";

//useId會產生跨服務器和客戶端的唯一ID
//useId不使用在列表中生成key
//每個ID都代表著該元件在元件們中的層級結構
//這個ID會包含冒號，所以在CSS選取器和querySelector中無法選取
export function IdUse() {
    const id = useId()
    //由於<label>、<input>、<p>、<span>處於同一元件IdUse，所以id都為:r1
    //可以加上後綴以區別同一元件不同層級的元素
    return (
        <div>
            <h1>useId</h1>
            <label htmlFor={id+'htmlFor'}>Do you like React?</label>
            <input id={id+'checkbox'} type="checkbox" name="react"/>
            <div>
                <p id={id+'p'}>
                我是子元素
                    <span id={id+'span'}>我是孫子元素</span>
                </p>
            </div>
        </div>
    )
  }