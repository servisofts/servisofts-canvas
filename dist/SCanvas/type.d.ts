import SCanvasAbstract from "./abstract";
declare type SCanvasType = {
    paint: (scanvas: SCanvasAbstract) => void;
    width?: number;
    height?: number;
    onClick?: (e: any) => void;
    onMousemove?: (e: any) => void;
    onMouseup?: (e: any) => void;
    onMousedown?: (e: any) => void;
};
export default SCanvasType;
