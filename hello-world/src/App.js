
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import { ShowName } from './jsx/jsxComponent';
import RouterHook from './jsx/routerHook';
//動態路由 
import DynamicId from './jsx/dynamicId';
//捲動到底部
import ScrollToBottom from './jsx/scrollToBottom';
import HookPage from './hook/hookpage';
import Father from './component/father';
import Error404Page from './404Page';
//把global-style以元件方式引入App
import { GlobalStyle } from './Styled/global.styled';



//主畫面建構，自製App Component並export，index.js引入並被JSX使用渲染
//巢狀路由需配合Output才能正確顯示
//動態路由路徑要注意
function App() {
  return (
    <>
    <GlobalStyle/>

    <Routes>
      <Route path='/' element={<HomePage/>}>
        <Route path='/hook' element={<HookPage/>}></Route>
        <Route path='/jsx' element={<ShowName/>}>
          <Route path='routerHook' element={<RouterHook/>}></Route>
          <Route path='routerHook/:id' element={<DynamicId/>}></Route>
        </Route>
        <Route path='/father' element={<Father/>}></Route>
      </Route>
      <Route path='*' element={<Error404Page/>}></Route>
    </Routes>
    <ScrollToBottom/>
    </>
  );
}

export default App;
