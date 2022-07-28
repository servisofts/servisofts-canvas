/// <reference types="react" />
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';
declare class SCanvas extends SCanvasAbstract implements SCanvasInterface {
    paint(g: HTMLCanvasElement): void;
    constructor(props: any);
    render(): JSX.Element;
}
export default SCanvas;
