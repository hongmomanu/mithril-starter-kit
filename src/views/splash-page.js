export class Splash {
    constructor() {
        this.looper = null;
        this.dataLoaded = false;
        this.routeToMainInvokedCount = 0;
        this.routeToMain = this.routeToMain.bind(this);
    }
    routeToMain() {
        this.routeToMainInvokedCount++;
        if (this.dataLoaded) {
            clearTimeout(this.looper);
            m.route.set('/index');
        }
    }
    oninit() {
        this.dataLoaded = false;
        Promise.all(
            [
                // Fetch all necessary data here
            ]
        ).then(() => {
            this.dataLoaded = true;
            if (this.routeToMainInvokedCount) {
                this.routeToMain();
            }
        });
    }
    oncreate(/*vnode*/) {
        console.log('DOM created');
        this.looper = setTimeout(this.routeToMain, 50000);
    }
    view(/*vnode*/) {
        return m('.holder', [
            m('.preloader', [
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
            ]),
        ]);
    }
}
