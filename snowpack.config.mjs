/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: '/',
        src: '/'
    },
    plugins: [
        '@snowpack/plugin-sass'
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
