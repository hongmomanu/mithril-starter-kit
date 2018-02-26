if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

import { IndexPage } from './views/landing-page';
import { Splash } from './views/splash-page';


//Define your routes here

m.route(document.body.querySelector('#root'), '/splash', {
    '/splash': Splash,
    '/index': IndexPage,
});