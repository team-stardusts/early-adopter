import { HashRouter, Route } from "react-router-dom";
import routes from "./pages/routes";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import News from "./pages/News/News";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path={routes.home} exact={true} component={Home} />
            <Route path={routes.news} component={News} />
        </HashRouter>
    );
}

export default App;
