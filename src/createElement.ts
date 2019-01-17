import { VirtualDOMElem } from './render';

interface Options {
    attrs?: object;
    children?: VirtualDOMElem[];
}

const createElement = (tagName: string, options: Options): VirtualDOMElem => {
    const vElem = Object.create(null);

    Object.assign(vElem, {
        tagName,
        attrs: options.attrs || {},
        children: options.children || [],
    });

    return vElem;
};

export default createElement;
