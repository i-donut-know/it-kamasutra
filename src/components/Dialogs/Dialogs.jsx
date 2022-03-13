import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (name, id) => {
  let path = "/dialogs/" + id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

const Message = (messageText) => {
  return <div className={s.message}>{messageText}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="1" id="1" />
        <DialogItem name="2" id="2" />
        <DialogItem name="3" id="3" />
      </div>
      <div className={s.messages}>
        <Message messageText="Message 1" />
        <Message messageText="Message 2" />
        <Message messageText="Message 3" />
      </div>
    </div>
  );
};

export default Dialogs;
