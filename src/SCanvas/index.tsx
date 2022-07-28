import React, { Component } from 'react';
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';

class SCanvas extends SCanvasAbstract implements SCanvasInterface {

    constructor(props: any) {
        super(props)
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