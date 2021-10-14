export interface IRequests {
    login: string;
}
export interface IRequestMethods {
    post: string;
    get: string;
    delete: string;
    put: string;
}
export interface INavigation {
    login: string;
    dashboard: string;
    pageNotFound: string;
    unauthorized: string;
    offline: string;
}
export interface IAppConfig {
    serviceRequests: IRequests;
    serviceMethods: IRequestMethods;
    navigation: INavigation;
}

export const AppConfig: IAppConfig = {
    serviceRequests: {
        login: 'login'
    },
    serviceMethods: {
        post: 'POST',
        get: 'GET',
        delete: 'DELETE',
        put: 'PUT'
    },
    navigation: {
        login: '/login',
        dashboard: '/dashboard',
        pageNotFound: '/page-not-found',
        unauthorized: '/unauthorized',
        offline: '/offline'
    }
};
