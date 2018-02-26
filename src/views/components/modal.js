export class Modal {
    constructor() {
        this.closed = true;
        this.openModalAction = this.openModalAction.bind(this);
        this.mousedown = this.mousedown.bind(this);
        this.mousemove = this.mousemove.bind(this);
        this.mouseup = this.mouseup.bind(this);
    }

    oninit(vnode) {
        console.log('Modal init', vnode.dom);
    }
    oncreate(vnode) {
        console.log('Modal created', vnode.dom);
    }
    onupdate(vnode) {
        console.log('Modal updated', vnode.dom);
        vnode.dom && !vnode.dom.open && vnode.dom.showModal();
    }
    onremove(/*vnode*/) {
        console.log('removing Modal element');
    }
    mousedown(){

    }
    mousemove(){

    }
    mouseup(){

    }
    view(vnode) {
        return this.closed
            ? null
            : m('dialog.modal.modalanim',{style:vnode.attrs.style}, [
                m(
                    '.close',
                    {
                        onclick: () => {
                            console.log('closed');
                            this.openModalAction(true);
                            if(vnode.attrs.closecb)vnode.attrs.closecb();
                        },
                    },
                    'x'
                ),
                m('.title',{onmousedown:this.mousedown,onmouseup:this.mouseup},vnode.attrs.title),
                m('.content',vnode.attrs.content),
            ]);
    }
    openModalAction(flag) {
        this.closed = flag;
    }
}
