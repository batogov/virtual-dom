// $ - when referring to real doms, e.g. $div, $el, $app
// v - when referring to virtual doms, e.g. vDiv, vEl, vApp

export type VirtualElementNode = {
    tagName: string;
    attrs: object;
    children: VirtualDOMElem[];
};

export type TextNode = string;

export type RealDOMElem = Text | HTMLElement;
export type VirtualDOMElem = TextNode | VirtualElementNode;

const renderElementNode = (vNode: VirtualElementNode): HTMLElement => {
    // Create the element
    const $el = document.createElement(vNode.tagName);

    // Add all attributes
    for (const [attr, value] of Object.entries(vNode.attrs)) {
        $el.setAttribute(attr, value);
    }

    // Append all children
    for (const child of vNode.children) {
        $el.appendChild(render(child));
    }

    return $el;
};

const render = (vNode: VirtualDOMElem): RealDOMElem => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    return renderElementNode(vNode);
};

export default render;
