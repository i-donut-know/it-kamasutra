import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello, Neo!", likesCount: 12 },
      { id: 2, message: "Choose wisely...", likesCount: 10 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 1, message: "How are you?" },
      { id: 1, message: "Wellcome to a brand new React world!" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
