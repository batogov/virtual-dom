import createElement from './createElement';
import render from './render';
import mount from './mount';

const vApp = createElement('div', {
    attrs: {
        id: 'app',
    },
    children: [
        // TextNode
        'Hello, world!',
        // ElementNode
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/129NVCr1UfsGTS/giphy.gif',
            },
        }),
    ],
});

const $app = render(vApp);
mount($app, document.getElementById('app'));
