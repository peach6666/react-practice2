
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import { ShowName } from './jsx/jsxComponent';
import JsxChild from './jsx/jsxChild';
//動態路由 
import JsxDynamicId from './jsx/jsxDynamicId';
import HookPage from './hook/hookpage';
import Error404Page from './404Page';



//主畫面建構，自製App Component並export，index.js引入並被JSX使用渲染
//巢狀路由需配合Output才能正確顯示
//動態路由路徑要注意
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}>
        <Route path='/hook' element={<HookPage/>}></Route>
        <Route path='/jsx' element={<ShowName/>}>
          <Route path='jsxChild' element={<JsxChild/>}></Route>
          <Route path='jsxChild/:id' element={<JsxDynamicId/>}></Route>
        </Route>
      </Route>
      <Route path='*' element={<Error404Page/>}></Route>
    </Routes>
    </>
  );
}

export default App;
