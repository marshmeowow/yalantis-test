import React from "react";
import styles from './MonthComponent.module.css'

const MonthCommponent = (props) => {
    const info = props.values.map( item => `${item.firstName} ${item.lastName} \n\n` )
    return(
        <div className={styles.tooltip}>
            {props.month}
            <span className={styles.tooltiptext}>{info}</span>
        </div>

    )
};

export default MonthCommponent;
