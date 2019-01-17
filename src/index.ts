import createElement from './createElement';
import render from './render';
import mount from './mount';


const createVirtualApp = (count: number) => createElement('div', {
    attrs: {
        id: 'app',
        "data-count": count,
    },
    children: [
        'The current count is: ',
        String(count),
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/129NVCr1UfsGTS/giphy.gif',
            },
        }),
    ],
});

let count = 0;

const vApp = createVirtualApp(count);
const $app = render(vApp);

let $root = mount($app, document.getElementById('app'));

setInterval(() => {
    count++;
    $root = mount(render(createVirtualApp(count)), $root);
}, 1000);
