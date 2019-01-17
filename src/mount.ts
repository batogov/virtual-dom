import { RealDOMElem } from './render';

const mount = ($node: RealDOMElem, $target: RealDOMElem | null) => {
    if ($target !== null) {
        // Ignore Internet Explorer and Safari
        $target.replaceWith($node);
    }
};

export default mount;
