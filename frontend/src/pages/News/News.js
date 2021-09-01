import { HashRouter, Route } from "react-router-dom";
import routes from "../routes";
import NewsDetail from "./NewsDetail";
import NewsList from "./NewsList";

function News(props) {
    /*const {
        match: { path },
    } = props;*/

    return (
        <HashRouter>
            <Route path={routes.news} exact={true} component={NewsList} />
            <Route
                path={routes.newsDetail}
                exact={true}
                component={NewsDetail}
            />
        </HashRouter>
    );
}

export default News;
