import React, { Component } from 'react';
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';

class SCanvas extends SCanvasAbstract implements SCanvasInterface {

    constructor(props: any) {
        super(props)
    }
    componentDidMount(): void {
        super.componentDidMount();
        this.canvas.addEventListener("click", this.onClick.bind(this));
        this.canvas.addEventListener("mousedown", this.onMousedown.bind(this))
        this.canvas.addEventListener("mousemove", this.onMousemove.bind(this))
        this.canvas.addEventListener("mouseup", this.onMouseup.bind(this))

    }
    componentWillUnmount(): void {
        this.canvas.removeEventListener("click", this.onClick)
        this.canvas.removeEventListener("mousedown", this.onMousedown)
        this.canvas.removeEventListener("mousemove", this.onMousemove)
        this.canvas.removeEventListener("mouseup", this.onMouseup)
    }



    loadImage(uri: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let img1 = new Image();
            img1.addEventListener('load', () => {
                resolve(img1);
            })
            img1.src = uri;
        })
    }



    render() {
        return (
            <canvas
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
                ref={(ref: any) => {
                    this.canvas = ref;
                }}

            >
            </canvas >
        )

    }
}
export default SCanvas;