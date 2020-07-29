import React,{useState, useEffect} from "react";
import MonthCommponent from "./MonthComponent";
import style from './MonthComponent.module.css'
import lodash from "lodash";

const MonthList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    async function loadData() {
        const response = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");
        const result = await response.json();

        setIsLoaded(true);
        const resWithMonth = result.map(item => Object.assign(item, {'month': new Date(item.dob).toLocaleString('en-us', {'month': 'long'})} ));
        const groupedByMonth = lodash.groupBy(resWithMonth, 'month');
        setItems(groupedByMonth);
    }

    useEffect( () => {
        try{
        loadData()}
        catch (e) {
            setIsLoaded(true);
            setError(error);
        }

    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {



        return (
            <div className={style.monthList} style={{color:'red'}}>
                {Object.keys(items).map(month => (
                    <MonthCommponent month={month} values={items[month]} key={month}/>
                ))}
            </div>

        );
    }
};

export default MonthList
