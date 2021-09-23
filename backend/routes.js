//Root routes
const HOME = "/";
const API = "/api";

//User routes
const USERS = "/users";

//News routes
const NEWS = "/news";
const NEWS_DETAIL = `${NEWS}/:id`;

//etc.
const COMPANY_NAME = "/company-name";

const routes = {
    home: HOME,
    api: API,
    users: USERS,
    news: NEWS,
    newsDetail: NEWS_DETAIL,
    companyName: COMPANY_NAME,
};

export default routes;
