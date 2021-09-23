import { useState, useEffect } from "react";
import { apiRoutes } from "../routes";
import "./Home.css";

function Home() {
    const [companyname, setCompanyname] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiRoutes.companyName)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCompanyname(data.companyname);
            });
        fetch(apiRoutes.users)
            .then((res) => res.json())
            .then((users) => setUsers(users));
    });

    return (
        <div className="home">
            <div className="home__greeting">
                {companyname ? (
                    <>Hello, we are {companyname}</>
                ) : (
                    <>Hello, Home!</>
                )}
            </div>
            <div>
                {users ? (
                    users.map((user) => (
                        <div key={user._id}>
                            {user.name}
                            {user.age}
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Home;
