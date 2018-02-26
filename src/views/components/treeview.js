export class TreeView {
    constructor(data) {
    // vnode.state is undefined at this point
        this.data = data||[{name:''}];
    }
    view() {
        return m('div', 'this is tree view');
    }
    oncreate() {
        console.log('A TreeView component was created');
    }
    changeData(data) {
        this.data = data;
    }
}
