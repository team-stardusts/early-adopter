import { HashRouter, Route } from "react-router-dom";
import NewsDetail from "./NewsDetail";
import NewsList from "./NewsList";

function News(props) {
    const {
        match: { path },
    } = props;

    return (
        <HashRouter>
            <Route path={path} exact={true} component={NewsList} />
            <Route path={`${path}/:id`} exact={true} component={NewsDetail} />
        </HashRouter>
    );
}

export default News;
