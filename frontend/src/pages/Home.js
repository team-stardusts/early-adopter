import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
    const [companyname, setCompanyname] = useState(null);

    useEffect(() => {
        fetch("/api/companyname")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCompanyname(data.companyname);
            });
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
        </div>
    );
}

export default Home;
