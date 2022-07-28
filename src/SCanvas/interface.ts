import { Component } from "react";
export default interface SCanvasInterface {
    canvas: HTMLCanvasElement;
    repaint(): void
}