import React, { Component } from 'react';
import SCanvasInterface from './interface';
import SCanvasType from './type';


abstract class SCanvasAbstract extends Component<SCanvasType> implements SCanvasInterface {

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.canvas.width = this.props.width ?? 10;
        this.canvas.height = this.props.height ?? 10;
        this.ctx = this.canvas.getContext("2d");
        this.repaint();
    }
    paint() {
        this.props.paint(this);
    }
    repaint(): void {
        this.paint()
    }
    // repaint


}
export default SCanvasAbstract;