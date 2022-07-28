import { Component } from 'react';
import SCanvasInterface from './interface';
import SCanvasType from './type';
declare abstract class SCanvasAbstract extends Component<SCanvasType> implements SCanvasInterface {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    constructor(props: any);
    componentDidMount(): void;
    paint(): void;
    repaint(): void;
}
export default SCanvasAbstract;
