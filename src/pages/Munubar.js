import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to = "/home">Home</Link>
                </li>
                <li>
                    <Link to = "/movies">Movies</Link>
                </li>
            </ul>
            <button onClick = {goHome} type = "button">홈으로</button>
            <Outlet/>
        </div>
    );
};

export default Menubar;