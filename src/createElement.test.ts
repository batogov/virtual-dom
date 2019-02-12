import createElement from './createElement';

describe('createElement function', () => {
    test('should return virtual element (without passing options argument)', () => {
        const vElem = createElement('div');

        expect(vElem).toEqual({
            tagName: 'div',
            attrs: {},
            children: [],
        })
    });

    test('should return virtual element (with passing options argument)', () => {
        const vChildElem = createElement('div', {
            attrs: {
                id: 'child',
            }
        })

        const vParentElem = createElement('div', {
            children: [
                vChildElem,
            ]
        });

        expect(vParentElem).toEqual({
            tagName: 'div',
            attrs: {},
            children: [
                {
                    tagName: 'div',
                    attrs: {
                        id: 'child',
                    },
                    children: [],
                }
            ],
        })
    });
});