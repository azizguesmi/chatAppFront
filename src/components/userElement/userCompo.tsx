import type React from "react";
import prof_pic from "./assets/profile-pic.png";

type UserProps = {
      name:string;
      lastMessage:string;
      onClick : React.MouseEventHandler<HTMLDivElement>;
}

export default function UserComo({ name, lastMessage, onClick} : UserProps ) {
      return (
            <div onClick={onClick}>
                  <div>
                        <img src={prof_pic}></img>
                  </div>
                  <div>
                        <label>{name}</label>
                        <div>{lastMessage}</div>
                  </div>
            </div>
      )
}