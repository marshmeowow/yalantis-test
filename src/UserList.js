import React,{useState, useEffect} from "react";
import MonthCommponent from "./MonthComponent";
import lodash from "lodash"

const UserList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    async function f() {
        const response = await fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users");
        const result = await response.json();

        setIsLoaded(true);
        const resWithMonth = result.map(item => Object.assign(item, {'month': new Date(item.dob).toLocaleString('en-us', {'month': 'long'})} ));
        const groupedByMonth = lodash.groupBy(resWithMonth, 'month');
        console.log(groupedByMonth);
        console.log(Object.keys(groupedByMonth));
        setItems(groupedByMonth);
    }

    useEffect( () => {
        try{
        f()}
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

            <div>
                {Object.keys(items).map(month => (
                    <MonthCommponent month={month} values={items[month]}/>
                ))}
            </div>

        );
    }
};

export default UserList
