import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 1, message: "How are you?" },
    { id: 1, message: "Wellcome to a brand new React world!" },
  ];

  let dialogsElements = dialogsData.map((d) => {
    return <DialogItem key={d.id} name={d.name} id={d.id} />;
  });

  let messagesElements = messagesData.map((m) => {
    return <Message key={m.id} messageText={m.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
