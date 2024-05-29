import { Component } from "react";

export default interface SCanvasInterface {
    canvas: HTMLCanvasElement;
    repaint(): void;
    loadImage(uri: string): Promise<any>;
    onClick(evt);
}