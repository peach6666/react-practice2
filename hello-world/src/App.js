import logo from './logo.svg';
import './App.css';

//JSX範例
const testFuc=(event)=>{
  console.log(event.target.value)
}
//作為子元件範例
function Item(props){
  return(
    <button onClick={props.handleClick}>{props.children}</button>
  )
}

const menu={
  title:"peach",
}
const printMessage=()=>{
  document.getElementById('show-area').innerHTML="我被按到"
}

//主畫面建構，自製App Component並export，index.js引入並被JSX使用渲染
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>peach's first component</p>
        <Item handleClick={printMessage} name="我的名字">我是Peach</Item>
        <button value={true} onClick={testFuc}></button>
        <div id="show-area"></div>
      </header>
    </div>
  );
}


export default App;
