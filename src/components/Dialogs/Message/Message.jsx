import React from "react";
import s from "./../Dialogs.module.css";

const Message = ({ messageText }) => {
  return <div className={s.message}>{messageText}</div>;
};

export default Message;
