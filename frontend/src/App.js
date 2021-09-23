import { HashRouter, Route } from "react-router-dom";
import { routes } from "./routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News/News";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const COMPANY_NAME = "StarDusts";

    return (
        <HashRouter>
            <Navigation companyName={COMPANY_NAME} />
            <Route path={routes.home} exact={true} component={Home} />
            <Route path={routes.news} component={News} />
            <Footer companyName={COMPANY_NAME} />
        </HashRouter>
    );
}

export default App;
