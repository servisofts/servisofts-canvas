export default interface SCanvasInterface {
    canvas: HTMLCanvasElement;
    repaint(): void;
    loadImage(uri: string): Promise<any>;
    onClick(evt: any): any;
}
