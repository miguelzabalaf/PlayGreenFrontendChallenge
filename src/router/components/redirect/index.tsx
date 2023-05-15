import { Navigate } from "react-router-dom";

interface RedirectProps {
    to: string;
}

function Redirect(props: RedirectProps): JSX.Element {
    const { to } = props;
    return <Navigate to={to} />;
}

export default Redirect;
