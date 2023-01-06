//useLayoutEffect效果和useEffect相同，執行時機不同而已
//useLayoutEffect是同步函式，不要放入過多動作導致使用者等過久
//useLayoutEffect是當useEffect不能滿足或有特殊需求再使用(如useEffect執行時機導致畫面css不正常)

// useLayoutEffect時間軸
// 1.建立、呼叫function component
// 2.真正更新DOM
// 3.呼叫useLayoutEffect
// 4.渲染畫面
// 5.「某個時間點」，偵測到state、props被改變
// 6.重新呼叫function component
// 7.在virtual DOM比較所有和原始DOM不一樣的地方
// 8.真正更新DOM
// 9.呼叫useLayoutEffect
// 10.渲染畫面
// 11.「某個時間點」，元件被移除
// 12.呼叫useLayoutEffect
