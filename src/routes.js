
// import InitActions from "./containers/InitActions";

// import features from "./constants/features";

// import HomePage from "./containers/HomePage";
// import PhotoPage from "./containers/PhotoPage";
// import FeaturedPage from "./containers/FeaturedPage";

// export default {

//   home: {
//     path: "/",
//     method: "get",
//     handler: HomePage
//   },

//   featured: {
//     path: `/featured/:feature(${features.join("|")})`,
//     method: "get",
//     handler: FeaturedPage,
//     action: InitActions.featuredPage
//   },

//   photo: {
//     path: "/photo/:id",
//     method: "get",
//     handler: PhotoPage,
//     action: InitActions.photoPage
//   },

//   // This route doesn't point to any handler.
//   // I made it just as example for showing an action responding with an error
//   bad: {
//     path: "/bad",
//     method: "get",
//     action: InitActions.badPage
//   }

// };

import HomePage from "./components/Home.jsx";
import AboutPage from "./components/About.jsx";
import FindPage from "./components/Find.jsx";
import Navigate from "./components/Navigate.jsx";


export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: HomePage
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: AboutPage
    },
    find: {
        path: '/find',
        method: 'get',
        page: 'find',
        title: 'Find',
        handler: FindPage,
        action: require('./actions/findBooks')
    },
    _navigate: {
        path: '/navigate',
        method: 'get',
        page: 'navigate',
        title: 'Navigate',
        handler: Navigate
    }
};
