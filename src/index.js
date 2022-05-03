import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// 2번째 자바스크립트 리덕스 예시
// import { createStore } from "redux";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       const newToToObj = { text: action.text, id: Date.now() };
//       return [newToToObj, ...state];
//     case DELETE_TODO:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DELETE";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   });
// };

// store.subscribe(paintToDos);

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// 1번째 자바스크립트 리덕스 예시
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const store = createStore(countModifier);

// const onChange = () => {
//   number.innerText = store.getState();
// };
// store.subscribe(onChange);

// const handleAdd = () => {
//   store.dispatch({ type: ADD });
// };

// const handleMinus = () => {
//   store.dispatch({ type: MINUS });
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
