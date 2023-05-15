export const routes = {
    dashboard: {
        path: 'dashboard/*',
        children: {
            home: { path: 'home' },
            history: { path: 'history' },
        },
    },
    auth: {
        path: '/auth/*',
        children: {
            login: { path: 'login' },
        }
    },
    common: {
        path: '/*',
        children: {
            notFound: { path: '/404' },
        }
    }
};