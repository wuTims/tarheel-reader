import Fluxible from "fluxible";
import fetchrPlugin from "fluxible-plugin-fetchr";
import RouteStore from './stores/RouteStore';

import routes from "./routes";

//import Root from "./containers/Root";
import Application from './components/Application.jsx';
import ApplicationStore from './stores/ApplicationStore';

//import FeaturedStore from "./stores/FeaturedStore";
import HtmlHeadStore from "./stores/HtmlHeadStore";
import IntlStore from "./stores/IntlStore";
//import PhotoStore from "./stores/PhotoStore";
import BookStore from './stores/BookStore';

// Create the fluxible app using Root as root component
const app = new Fluxible({ component: Application });

// Make fetchr services respond to /api endpoint
app.plug(fetchrPlugin({ xhrPath: "/api" }));

// Register a fluxible RouteStore
app.registerStore(RouteStore);
// Register app-specific stores
//app.registerStore(FeaturedStore);
app.registerStore(HtmlHeadStore);
app.registerStore(IntlStore);
app.registerStore(BookStore);
app.registerStore(ApplicationStore);
//app.registerStore(PhotoStore);

export default app;
