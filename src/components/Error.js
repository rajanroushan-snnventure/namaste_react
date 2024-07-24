import { useRouteError } from "react-router-dom";
const Error = () => {
    const routError = useRouteError();
    console.log(routError);
    return (
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{routError.status}{":"}{routError.statusText}</h3>
        </div>
    );
}
export default Error;