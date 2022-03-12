import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
            1
        </div>
        <div className={s.dialog}>
            2
        </div>
        <div className={s.dialog}>
            3
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          4
        </div>
        <div className={s.message}>
          5
        </div>
        <div className={s.message}>
          6
        </div>
      </div>
    </div>
  )
}

export default Dialogs;