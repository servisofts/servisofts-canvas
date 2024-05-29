import SCanvasAbstract from "./abstract";

type SCanvasType = {
    paint: (scanvas: SCanvasAbstract) => void;
    width?: number;
    height?: number;
    onClick?: (e) => void;
    onMousemove?: (e) => void;
    onMouseup?: (e) => void;
    onMousedown?: (e) => void;
}
export default SCanvasType;