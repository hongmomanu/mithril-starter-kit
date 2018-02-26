export class Counter {
    constructor(count) {
    // vnode.state is undefined at this point
        this.count = count || 0;
        this.add = this.add.bind(this);
    }
    view() {
        return m('div', `this count is ${this.count}`);
    }
    oncreate() {
        console.log(`A ${this.count} component was created`);
    }
    add(step) {
        this.count = this.count + step;
    }
}
