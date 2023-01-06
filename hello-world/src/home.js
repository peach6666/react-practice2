//引入Link去建立導頁的連結
import { Link , Outlet} from "react-router-dom"
import logo from './logo.svg';

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
  //props為 function App元件中<Item> dom的內容(<Item handleClick={printMessage} name="我的名字">我是Peach</Item>)
  //props為read only，不可以進行參數的改動，所有的 React component 都必須像 Pure function 一般保護他的 props
  //(https://zh-hant.reactjs.org/docs/components-and-props.html)
  function Item(props){
    console.log(props)
    //props的值為父元件App傳進來
    return(
      <>
        <h1>我是Item元件</h1>
        <button onClick={props.handleClick}>{props.name}</button>
      </>
    )
  }
  
  //子元件範例2
  //多行html需一個父元素
  function Item2(item){
    return(
      <div>
        <h1>元件複用測試</h1>
        <p>{item.name}</p>
        <p>{item.children}</p>
        <p>{item.value}</p>
      </div>
    )
}

export default function HomePage(){
    return(
        //Item作為子元件引入，function Item的props就是<Item>的html內容
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="hook">Hook</Link>
                <Link to="jsx">JSX</Link>
            </nav>
            <h1>首頁</h1>
            {element}
            <p>{author.title}'s first App</p>
            <Item handleClick={printMessage} name="按我">我是Peach</Item>
            <button value={true} onClick={testFuc}>console true測試</button>
            <div id="show-area"></div>
            <Item2 value="好東西" name="我有name">測試物品children</Item2>
            <Item2 value="壞東西">測試物品children2</Item2>
            </header>
            <Outlet/>
        </div>
    )
}