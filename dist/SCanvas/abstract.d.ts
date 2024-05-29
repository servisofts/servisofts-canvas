import { Component } from 'react';
import SCanvasInterface from './interface';
import SCanvasType from './type';
declare abstract class SCanvasAbstract extends Component<SCanvasType> implements SCanvasInterface {
    canvas: HTMLCanvasElement;
    webview: any;
    ctx: CanvasRenderingContext2D | null;
    constructor(props: any);
    onMousedown(evt: any): void;
    onMouseup(evt: any): void;
    onMousemove(evt: any): void;
    onClick(evt: any): void;
    abstract loadImage(uri: string): Promise<any>;
    componentDidMount(): void;
    paint(): void;
    repaint(): void;
    drawImage(img: any, type: any): void;
    grid({ color, size }: {
        color?: string;
        size?: number;
    }): void;
    getColorMatrix(gx?: number, gy?: number, width?: number, height?: number): Promise<unknown>;
}
export default SCanvasAbstract;
