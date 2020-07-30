import React, {useState} from "react";
import UserCommponent from "./userList";

const MonthCommponent = (props) => {
    const [hover, setHover] = useState(false);

    return(
        <div
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             style={{color: getColor(props.values)}}
        >
            {props.month}
            <UserCommponent
                hide={hover}
                values = {props.values}
            />
        </div>

    )
};

function getColor(values) {
    if (values.length <= 2 && values.length >= 0 ){
        return 'gray'
    }else if(values.length <= 6 && values.length >= 3){
        return 'blue'
    }
    else if(values.length <= 10 && values.length >= 7){
        return 'green'

    }else if(11 <=values.length){
        return 'red'
    }
}

export default MonthCommponent;

