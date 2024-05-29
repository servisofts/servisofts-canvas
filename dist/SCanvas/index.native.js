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
import React from 'react';
import SCanvasAbstract from './abstract';
import Canvas, { Image } from 'servisofts-react-native-canvas';
var ImageC = Image;
var CanvasNative = Canvas;
var SCanvas = /** @class */ (function (_super) {
    __extends(SCanvas, _super);
    function SCanvas(props) {
        var _this = _super.call(this, props) || this;
        _this.loadAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    SCanvas.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    SCanvas.prototype.paint = function () {
        _super.prototype.paint.call(this);
    };
    SCanvas.prototype.loadImage = function (uri) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var img1 = new ImageC(_this.canvas);
            img1.addEventListener('load', function () {
                console.log("RESOLVEEE");
                resolve(img1);
            });
            img1.src = uri;
            // return;
            // RNFS.readFile(uri, 'base64')
            //     .then((b64) => {
            //         var img1 = new ImageC(this.canvas);
            //         img1.src = `data:image/png;base64, ${b64}`;
            //         img1.addEventListener('load', () => {
            //             resolve(img1);
            //         });
            //     })
            //     .catch((error) => {
            //         reject(error);
            //     });
        });
    };
    SCanvas.prototype.render = function () {
        var _this = this;
        return (React.createElement(CanvasNative, { onLoad: function () {
                var _canvas = _this.canvas;
                _canvas.addMessageListener(function (evt) {
                    switch (evt.type) {
                        case "click":
                            _this.onClick(evt.data);
                            break;
                        case "mousemove":
                            _this.onMousemove(evt.data);
                            break;
                        case "mouseup":
                            _this.onMouseup(evt.data);
                            break;
                        case "mousedown":
                            _this.onMousedown(evt.data);
                            break;
                    }
                });
                _canvas.webview.injectJavaScript("\n                    function stringifyEvent(e) {\n                        const obj = {};\n                        for (let k in e) {\n                          obj[k] = e[k];\n                        }\n                        return JSON.stringify(obj, (k, v) => {\n                          if (v instanceof Node) return 'Node';\n                          if (v instanceof Window) return 'Window';\n                          return v;\n                        }, ' ');\n                      }\n                    async function notify(key,data){\n                        var noti = {\n                            type:key,\n                            payload:{\n                                data:JSON.parse(data),\n                                type:key\n                            },\n                            meta:{}\n                        }\n                        window.ReactNativeWebView.postMessage(JSON.stringify(noti));\n                    }\n                    var canvas = document.getElementsByTagName(\"canvas\")[0];\n\n                    canvas.addEventListener('click',function(e){\n                        var itm = stringifyEvent(e);\n                        notify(\"click\",itm);\n                    })\n                    canvas.addEventListener('mousedown',function(e){\n                        var itm = stringifyEvent(e);\n                        notify(\"mousedown\",itm);\n                    })\n                    canvas.addEventListener('mousemove',function(e){\n                        var itm = stringifyEvent(e);\n                        notify(\"mousemove\",itm);\n                    })\n           \n                    canvas.addEventListener('mouseup',function(e){\n                        var itm = stringifyEvent(e);\n                        notify(\"mouseup\",itm);\n                    })\n\n                ");
                // this.loadAsync();
                // this.canvas.addEventListener("click", (evt) => {
                //     console.log(evt)
                // })
            }, ref: function (ref) {
                _this.canvas = ref;
                _this.webview = ref === null || ref === void 0 ? void 0 : ref.webview;
            } }));
    };
    return SCanvas;
}(SCanvasAbstract));
export default SCanvas;
