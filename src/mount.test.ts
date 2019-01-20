import mount from './mount';

describe('mount function', () => {
    beforeEach(() => {
        document.body.innerHTML = '';

        const $target = document.createElement('div');

        $target.className = 'target-node';
        document.body.appendChild($target);
    });

    test('should mount and return the node correctly', () => {
        const $node = document.createElement('div');
        const $target = document.querySelector('div');

        $node.className = 'node';

        const $resultNode = mount($node, $target);

        expect(document.body.children[0].className).toBe('node');
        expect($resultNode).toBe($node);
    });

    test('should not mount the node if passed node is null', () => {
        const $target = document.querySelector('div');
        const $resultNode = mount(null, $target);

        expect(document.body.children[0].className).toBe('target-node');
        expect($resultNode).toBe(null);
    });

    test('should not mount the node if passed target is null', () => {
        const $node = document.createElement('div');

        $node.className = 'node';

        const $resultNode = mount($node, null);

        expect(document.body.children[0].className).toBe('target-node');
        expect($resultNode).toBe(null);
    });
});