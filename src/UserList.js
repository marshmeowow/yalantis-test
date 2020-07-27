import React,{useState, useEffect} from "react";

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
        setItems(result);
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
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.firstName}
                    </li>
                ))}
            </ul>
        );
    }
};

export default UserList
