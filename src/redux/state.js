let rerenderEntireTree = () => {
  console.log("state had been changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello, Neo!", likesCount: 12 },
      { id: 2, message: "Choose wisely...", likesCount: 10 },
    ],
    newPostText: "Add text here",
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

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
