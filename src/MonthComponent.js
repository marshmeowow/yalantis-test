import React, {useState} from "react";
import UserCommponent from "./userList";

const MonthCommponent = (props) => {
    const [hover, setHover] = useState(false);

    return(
        <div
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            {props.month}
            <UserCommponent
                hide={hover}
                values = {props.values}
            />
        </div>

    )
};

export default MonthCommponent;
