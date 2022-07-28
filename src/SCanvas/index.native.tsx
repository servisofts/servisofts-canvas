import React, { Component } from 'react';
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';
import Canvas from 'react-native-canvas';

class SCanvas extends SCanvasAbstract implements SCanvasInterface {

    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Canvas
                style={{
                    // borderWidth: 1,
                }}
                ref={ref => this.canvas = ref}
            >
            </Canvas >
        )

    }
}
export default SCanvas;