import logo from './logo.svg';
import { ShowName } from './jsxComponent';
import { StateComponent } from './stateComponent';
import { ContextChild, ContextComponent, ContextGrandson } from './contextComponent';
import { Counting } from './reduceComponent';
import './App.css';

//我是Peach按鈕的功能，把show-area區塊的文字改為我被按到
const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到"
}

//event.target為console log true按鈕的dom
const testFuc=(event)=>{
  console.log(event.target)
  console.log(event.target.value)
}

const author={
  title:"peach",
}

//element範例
//element.type為p
//element.props.children為"我是element"
const element = <p>我是element</p>

//元件範例
//元件命名，字首須為大寫
//作為子元件範例
//props為 <Item> dom的內容
//props為read only，不可以進行參數的改動，所有的 React component 都必須像 Pure function 一般保護他的 props
//(https://zh-hant.reactjs.org/docs/components-and-props.html)
function Item(props){
  console.log(props)
  return(
    <button onClick={props.handleClick}>{props.children}</button>
  )
}

//子元件範例2
//多行html需一個父元素
function Item2(item){
  return(
    <div>
      <p>{item.name}</p>
      <p>{item.children}</p>
      <p>{item.value}</p>
    </div>
  )
}

//主畫面建構，自製App Component並export，index.js引入並被JSX使用渲染
//Item作為子元件引入，function Item的props就是<Item>的html內容
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        <ShowName></ShowName>
        <p>{author.title}'s first App</p>
        <Item handleClick={printMessage} name="我的名字">我是Peach</Item>
        <button value={true} onClick={testFuc}>console log true</button>
        <div id="show-area"></div>
        <Item2 value="好東西" name="元件複用測試">測試物品children</Item2>
        <Item2 value="壞東西">測試物品children2</Item2>
        <StateComponent/>
        <ContextComponent/>
        <ContextChild/>
        <ContextGrandson/>
        <Counting/>
      </header>
    </div>
  );
}


export default App;
