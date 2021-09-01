import { HashRouter, Route } from "react-router-dom";
import router from "./pages/routes";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path={router.home} exact={true} component={Home} />
            <Route path={router.news} component={News} />
        </HashRouter>
    );
}

export default App;
