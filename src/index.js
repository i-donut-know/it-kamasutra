import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";
import { subscribe } from "./redux/state";
import "./index.css";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
