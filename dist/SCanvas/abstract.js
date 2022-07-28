var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from 'react';
var SCanvasAbstract = /** @class */ (function (_super) {
    __extends(SCanvasAbstract, _super);
    function SCanvasAbstract(props) {
        return _super.call(this, props) || this;
    }
    SCanvasAbstract.prototype.componentDidMount = function () {
        var _a, _b;
        this.canvas.width = (_a = this.props.width) !== null && _a !== void 0 ? _a : 10;
        this.canvas.height = (_b = this.props.height) !== null && _b !== void 0 ? _b : 10;
        this.ctx = this.canvas.getContext("2d");
        this.repaint();
    };
    SCanvasAbstract.prototype.paint = function () {
        this.props.paint(this);
    };
    SCanvasAbstract.prototype.repaint = function () {
        this.paint();
    };
    return SCanvasAbstract;
}(Component));
export default SCanvasAbstract;
