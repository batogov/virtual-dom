import { RealDOMElem } from './render';

const mount = ($node: RealDOMElem, $target: RealDOMElem | null): RealDOMElem | null => {
    if ($target !== null) {
        // Ignore Internet Explorer and Safari
        $target.replaceWith($node);
        return $node;
    }

    return null;
};

export default mount;
