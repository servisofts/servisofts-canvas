import React, { Component } from 'react';
import SCanvasAbstract from './abstract';
import SCanvasInterface from './interface';
import Canvas, { Image, ImageData } from 'servisofts-react-native-canvas';
import RNFS from 'react-native-fs';
const ImageC: any = Image;
const CanvasNative: any = Canvas;
class SCanvas extends SCanvasAbstract implements SCanvasInterface {

    constructor(props: any) {
        super(props)
    }

    componentDidMount(): void {
        super.componentDidMount();

    }


    paint(): void {
        super.paint();
    }
    loadImage(uri: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var img1 = new ImageC(this.canvas);
            img1.addEventListener('load', () => {
                console.log("RESOLVEEE")
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
    }

    loadAsync = async () => {
        // var _canvas: any = this.canvas;
        // var resp = await _canvas.postMessage({ id: "click", type: "json", payload: {} })
        // console.log(resp);
    }
    render() {

        return (
            <CanvasNative
                onLoad={() => {
                    var _canvas: any = this.canvas;
                    _canvas.addMessageListener((evt) => {
                        switch (evt.type) {
                            case "click":
                                this.onClick(evt.data);
                                break;
                            case "mousemove":
                                this.onMousemove(evt.data);
                                break;
                            case "mouseup":
                                this.onMouseup(evt.data);
                                break;
                            case "mousedown":
                                this.onMousedown(evt.data);
                                break;
                        }
                    })
                    _canvas.webview.injectJavaScript(`
                    function stringifyEvent(e) {
                        const obj = {};
                        for (let k in e) {
                          obj[k] = e[k];
                        }
                        return JSON.stringify(obj, (k, v) => {
                          if (v instanceof Node) return 'Node';
                          if (v instanceof Window) return 'Window';
                          return v;
                        }, ' ');
                      }
                    async function notify(key,data){
                        var noti = {
                            type:key,
                            payload:{
                                data:JSON.parse(data),
                                type:key
                            },
                            meta:{}
                        }
                        window.ReactNativeWebView.postMessage(JSON.stringify(noti));
                    }
                    var canvas = document.getElementsByTagName("canvas")[0];

                    canvas.addEventListener('click',function(e){
                        var itm = stringifyEvent(e);
                        notify("click",itm);
                    })
                    canvas.addEventListener('mousedown',function(e){
                        var itm = stringifyEvent(e);
                        notify("mousedown",itm);
                    })
                    canvas.addEventListener('mousemove',function(e){
                        var itm = stringifyEvent(e);
                        notify("mousemove",itm);
                    })
           
                    canvas.addEventListener('mouseup',function(e){
                        var itm = stringifyEvent(e);
                        notify("mouseup",itm);
                    })

                `);
                    // this.loadAsync();
                    // this.canvas.addEventListener("click", (evt) => {
                    //     console.log(evt)
                    // })
                }}
                ref={ref => {
                    this.canvas = ref;
                    this.webview = ref?.webview;
                }}
            />
        )

    }
}
export default SCanvas;