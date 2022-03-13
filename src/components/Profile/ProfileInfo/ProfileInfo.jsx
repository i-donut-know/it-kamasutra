import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://media.istockphoto.com/vectors/silver-metallic-gradient-with-scratches-titan-steel-chrome-nickel-vector-id1177181921?k=20&m=1177181921&s=612x612&w=0&h=R2ffG5pdPUNvCuo1xyOHJxegTmCkmDpUCjuuUAH6gqE=" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
