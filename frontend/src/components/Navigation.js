import { Link } from "react-router-dom";
import router from "../pages/routes";

function Navigation() {
    return (
        <div>
            <h2>Navigation!</h2>
            <ol>
                <li>
                    <Link to={router.home}>Home</Link>
                </li>
                <li>
                    <Link to={router.news}>News</Link>
                </li>
            </ol>
        </div>
    );
}

export default Navigation;
