import React, { Component } from 'react';
import SCanvasInterface from './interface';
import SCanvasType from './type';


abstract class SCanvasAbstract extends Component<SCanvasType> implements SCanvasInterface {

    canvas: HTMLCanvasElement;
    webview: any;
    ctx: CanvasRenderingContext2D | null;
    constructor(props: any) {
        super(props)
    }


    onMousedown(evt: any) {
        if (this.props.onMousedown) {
            this.props.onMousedown(evt);
        }
    }
    onMouseup(evt: any) {
        if (this.props.onMouseup) {
            this.props.onMouseup(evt);
        }
    }
    onMousemove(evt: any) {
        if (this.props.onMousemove) {
            this.props.onMousemove(evt);
        }
    }
    onClick(evt: any) {
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    }


    abstract loadImage(uri: string): Promise<any>;

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
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.paint()
    }

    drawImage(img, type) {

    }
    grid({ color = "#ffffff", size = 20 }) {
        var { ctx, canvas } = this;
        if (!ctx) return;
        var m = size;
        for (let i = 0; i < canvas.width / m; i++) {
            for (let j = 0; j < canvas.height / m; j++) {
                if ((i + j) % 2 == 0) {
                    ctx.fillStyle = color
                } else {
                    ctx.fillStyle = color + "cc"
                }
                ctx.fillRect(i * m, j * m, m, m);
            }
        }
    }
    async getColorMatrix(gx = 0, gy = 0, width = this.canvas.width, height = this.canvas.height) {
        return new Promise(async (resolve, reject) => {
            if (!this.ctx) {
                reject("No ctx instance");
                return;
            }
            var ctx: any = this.ctx;

            var time = new Date().getTime();
            var colors = await ctx.getImageData(gx, gy, width, height);
            time = new Date().getTime() - time;
            colors = Object.values(colors.data);
            var matrix: any = [];
            var x, y, pixel;
            for (let i = 0; i < colors.length; i += 4) {
                pixel = {
                    r: colors[i],
                    g: colors[i + 1],
                    b: colors[i + 2],
                    a: colors[i + 3],
                }
                x = (i / 4) % width;
                y = parseInt(((i / width) / 4) + "");
                if (!matrix[y]) {
                    matrix[y] = [];
                }
                matrix[y][x] = pixel;
            }
            resolve(matrix)
        })

    }


}
export default SCanvasAbstract;