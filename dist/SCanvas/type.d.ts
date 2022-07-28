import SCanvasAbstract from "./abstract";
declare type SCanvasType = {
    paint: (scanvas: SCanvasAbstract) => void;
    width?: number;
    height?: number;
};
export default SCanvasType;
