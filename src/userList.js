import React from "react";
import style from "./MonthComponent.module.css"

const UserCommponent = (props) => {

    if(!props.hide){
        return <div> </div>
    }
    else{
        return (
            <div className={style.userlist}>
                {props.values.map( item => <p key={item.id}>{item.firstName} {item.lastName}</p> ) }
            </div>
        )
    }
};

export default UserCommponent;
