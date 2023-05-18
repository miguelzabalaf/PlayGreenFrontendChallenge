export const routes = {
    dashboard: {
        path: '/dashboard/*',
        children: {
            home: { path: 'home', fullPath: '/dashboard/home' },
            history: { path: 'history' },
        },
    },
    auth: {
        path: '/auth/*',
        children: {
            login: { path: 'login', fullPath: '/auth/login' },
        }
    },
    common: {
        path: '/*',
        children: {
            notFound: { path: '/404', fullPath: '/404' },
            logout: { path: '/logout', fullPath: '/logout' },
        }
    }
};