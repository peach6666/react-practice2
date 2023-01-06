###只在元件最上層呼叫 Hook
不要在迴圈、條件式或是巢狀的 function 內呼叫 Hook。相反的，在任何 early return 之前，請在 React function top level 使用 Hook。藉由遵循這些規則，你可以確保當每次一個 component render 時 Hook 都依照正確的順序被呼叫。正是這個使得 React 有辦法在多個 useState 和 useEffect 呼叫間，正確地保持 Hook 的 state。

###只在 React Function 中呼叫 Hook

別在一般的 JavaScript function 中呼叫 Hook。相反的，你可以：

✅ 在 React function component 中呼叫 Hook。
✅ 在自定義的 Hook(customizeHook) 中呼叫 Hook。

#Hook 擁抱 JavaScript closure，並避免在 JavaScript 已經提供解決方案的情況下引入 React 特定的 API。