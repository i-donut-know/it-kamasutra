import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => {
    return <DialogItem key={d.id} name={d.name} id={d.id} />;
  });

  let messagesElements = props.state.messages.map((m) => {
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
