import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const err = useRouteError();

    return (
        <div>
            <h1>ErrorPage</h1>
            <p>{err.data}</p>
        </div>
    )
}