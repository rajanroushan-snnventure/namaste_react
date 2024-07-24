import {useState} from "react";
const User = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h3>{count}</h3>
            <h1>{props.name}</h1>
            <h2>Bangalore</h2>
        </div>
    );
}
export default User;