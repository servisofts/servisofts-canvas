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
import React from 'react';
import SCanvasAbstract from './abstract';
var SCanvas = /** @class */ (function (_super) {
    __extends(SCanvas, _super);
    function SCanvas(props) {
        return _super.call(this, props) || this;
    }
    SCanvas.prototype.paint = function (g) {
        throw new Error('Method not implemented.');
    };
    SCanvas.prototype.render = function () {
        return (React.createElement("canvas", { ref: function (ref) {
                console.log(ref);
            } }));
    };
    return SCanvas;
}(SCanvasAbstract));
export default SCanvas;
