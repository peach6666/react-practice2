import logo from './logo.svg';
import './App.css';

//JSX範例
//event.target為console log true按鈕的dom
const testFuc=(event)=>{
  console.log(event.target)
  console.log(event.target.value)
}

const author={
  title:"peach",
}

//我是Peach按鈕的功能，把show-area區塊的文字改為我被按到
const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到"
}

//元件範例
//元件命名，字首須為大寫
//作為子元件範例
//props為 <Item> dom的內容
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
      <h1>{item.name}</h1>
      <h1>{item.children}</h1>
      <h1>{item.value}</h1>
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
        <p>{author.title}'s first component</p>
        <Item handleClick={printMessage} name="我的名字">我是Peach</Item>
        <button value={true} onClick={testFuc}>console log true</button>
        <div id="show-area"></div>
        <Item2 value="好東西" name="測試物品">測試物品children</Item2>
      </header>
    </div>
  );
}


export default App;
