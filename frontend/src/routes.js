const HOME = "/";
const NEWS = "/news";
const NEWS_DETAIL = `${NEWS}/:id`;
const USERS = "/users";

//API
const COMPANY_NAME = "/company-name";

export const routes = {
    home: HOME,
    news: NEWS,
    newsDetail: NEWS_DETAIL,
};

export const apiRoutes = {
    companyName: `/api${COMPANY_NAME}`,
    users: `/api${USERS}`,
};
