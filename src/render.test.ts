import render from './render';
import createElement from './createElement';

describe('render function', () => {
    test('should render text node', () => {
        const $elem = render('Text Node');

        expect($elem.nodeType).toEqual(3);
    });

    test('should render element node', () => {
        const vElem = createElement('div');
        const $elem = render(vElem);

        expect($elem.nodeType).toEqual(1);
    });
});