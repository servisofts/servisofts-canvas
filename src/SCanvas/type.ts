import SCanvasAbstract from "./abstract";

type SCanvasType = {
    paint: (scanvas: SCanvasAbstract) => void;
    width?: number;
    height?: number;
}
export default SCanvasType;