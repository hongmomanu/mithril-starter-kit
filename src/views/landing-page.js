import { Counter } from './components/counter';
import { Modal } from './components/modal';
import { Socket } from '../libs/phoenix';
export const counter = new Counter(2);
export const counter2 = new Counter(3);
export const modal = new Modal();
export class IndexPage {
    constructor() {}
    oninit(/*vnode*/) {
        console.log('initialized');
        let socket = new Socket('ws://localhost:4000/socket', { params: {  } });
        socket.connect();
        let channel = (window.channel = socket.channel('room:lobby', {userToken: 1000*Math.random(),role:localStorage.getItem('role')}));

        channel
            .join()
            .receive('ok', resp => {
                console.log('Joined successfully', resp);
            })
            .receive('error', resp => {
                console.log('Unable to join', resp);
            });
        channel.on('new_msg', payload => {
            if(counter)counter.add(1);
            if(counter2)counter2.add(2);
            m.redraw();
            console.log(`[${Date()}]`,payload.body);
               
        });    
        //setInterval(()=>channel.push('new_msg', {body: {name:performance.now()}}),1);    
    }
    oncreate(/*vnode*/) {
        console.log('DOM created');
    }
    // onbeforeupdate(/*vnode, old*/) {
    //     console.log('onbeforeupdate');
    //     return true;
    // }
    // onupdate(/*vnode*/) {
    //     console.log('DOM updated');
    // }
    onbeforeremove(/*vnode*/) {
        console.log('exit animation can start');
        return new Promise(function(resolve) {
            // call after animation completes
            resolve();
        });
    }
    onremove(/*vnode*/) {
        console.log('removing DOM element');
    }
    view(/*vnode*/) {
        return m('div', [
            m('h2', 'Congratulations, you made it sadsadsdsad!'),
            m('p', 'You\'ve spun up your very first Mithril app :-)'),
            m(counter),
            m(counter2),
            m(modal, {
                content: m('div', 'My first app'),
                title: m('div', 'title'),
                style: { width: '500px', height: '300px' },
                closecb:()=>{
                    counter.add(10000);
                },
            }),
            m(
                'button',
                {
                    onclick: function() {
                        counter.add(1);
                    },
                },
                counter.count + ' clicks'
            ),
            m(
                'button',
                {
                    onclick: function() {
                        counter2.add(2);
                    },
                },
                counter2.count + ' clicks'
            ),
            m(
                'button',
                {
                    onclick: function() {
                        modal.openModalAction(false);
                    },
                },
                'show modal'
            ),
        ]);
    }
}
