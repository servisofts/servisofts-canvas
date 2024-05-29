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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from 'react';
var SCanvasAbstract = /** @class */ (function (_super) {
    __extends(SCanvasAbstract, _super);
    function SCanvasAbstract(props) {
        return _super.call(this, props) || this;
    }
    SCanvasAbstract.prototype.onMousedown = function (evt) {
        if (this.props.onMousedown) {
            this.props.onMousedown(evt);
        }
    };
    SCanvasAbstract.prototype.onMouseup = function (evt) {
        if (this.props.onMouseup) {
            this.props.onMouseup(evt);
        }
    };
    SCanvasAbstract.prototype.onMousemove = function (evt) {
        if (this.props.onMousemove) {
            this.props.onMousemove(evt);
        }
    };
    SCanvasAbstract.prototype.onClick = function (evt) {
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    };
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
        if (!this.ctx)
            return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.paint();
    };
    SCanvasAbstract.prototype.drawImage = function (img, type) {
    };
    SCanvasAbstract.prototype.grid = function (_a) {
        var _b = _a.color, color = _b === void 0 ? "#ffffff" : _b, _c = _a.size, size = _c === void 0 ? 20 : _c;
        var _d = this, ctx = _d.ctx, canvas = _d.canvas;
        if (!ctx)
            return;
        var m = size;
        for (var i = 0; i < canvas.width / m; i++) {
            for (var j = 0; j < canvas.height / m; j++) {
                if ((i + j) % 2 == 0) {
                    ctx.fillStyle = color;
                }
                else {
                    ctx.fillStyle = color + "cc";
                }
                ctx.fillRect(i * m, j * m, m, m);
            }
        }
    };
    SCanvasAbstract.prototype.getColorMatrix = function (gx, gy, width, height) {
        if (gx === void 0) { gx = 0; }
        if (gy === void 0) { gy = 0; }
        if (width === void 0) { width = this.canvas.width; }
        if (height === void 0) { height = this.canvas.height; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var ctx, time, colors, matrix, x, y, pixel, i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.ctx) {
                                        reject("No ctx instance");
                                        return [2 /*return*/];
                                    }
                                    ctx = this.ctx;
                                    time = new Date().getTime();
                                    return [4 /*yield*/, ctx.getImageData(gx, gy, width, height)];
                                case 1:
                                    colors = _a.sent();
                                    time = new Date().getTime() - time;
                                    colors = Object.values(colors.data);
                                    matrix = [];
                                    for (i = 0; i < colors.length; i += 4) {
                                        pixel = {
                                            r: colors[i],
                                            g: colors[i + 1],
                                            b: colors[i + 2],
                                            a: colors[i + 3]
                                        };
                                        x = (i / 4) % width;
                                        y = parseInt(((i / width) / 4) + "");
                                        if (!matrix[y]) {
                                            matrix[y] = [];
                                        }
                                        matrix[y][x] = pixel;
                                    }
                                    resolve(matrix);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return SCanvasAbstract;
}(Component));
export default SCanvasAbstract;
