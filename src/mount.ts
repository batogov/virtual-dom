import { RealDOMElem } from './render';

const mount = ($node: RealDOMElem | null, $target: RealDOMElem | null): RealDOMElem | null => {
    if ($node !== null && $target !== null) {
        // Ignore Internet Explorer and Safari
        $target.replaceWith($node);
        return $node;
    }

    return null;
};

export default mount;
