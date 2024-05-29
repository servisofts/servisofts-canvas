/// <reference types="react" />
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';
declare class SCanvas extends SCanvasAbstract implements SCanvasInterface {
    constructor(props: any);
    componentDidMount(): void;
    paint(): void;
    loadImage(uri: string): Promise<any>;
    loadAsync: () => Promise<void>;
    render(): JSX.Element;
}
export default SCanvas;
