/*
 * @Author: JimmyDaddy
 * @Date: 2017-09-14 10:40:09
 * @Last Modified by: Lucy
 * @Last Modified time: 2018-06-19 21:15:00
 * @Description
 * @flow
 */
import { NativeModules } from 'react-native'

const { ImageMarker } = NativeModules

export type Position = $Enum<{
        'topLeft': string,
        'topCenter': string,
        'topRight': string,
        'bottomLeft': string,
        'bottomCenter': string ,
        'bottomRight': string,
        'center': string
    }>;


type TextMarkOption = {
    // image src, local image
    src: string,
    text: string,
    // if you set position you don't need to set X and Y
    X?: number,
    Y?: number,
    // eg. '#aacc22'
    color: string,
    fontName: string,
    fontSize: number,
    // scale image
    scale: number,
    // image quality
    quality: number,
    position?: Position,
    alignment?:number,

}

type ImageMarkOption = {
    // image src, local image
    src: string,
    markerSrc: string,
    X?: number,
    Y?: number,
    // marker scale
    markerScale: number,
    // image scale
    scale: number,
    quality: number,
    position?: Position
}

export default class Marker {
    static markText(option: TextMarkOption) {
        const {
            src,
            text,
            X,
            Y,
            color,
            fontName,
            fontSize,
            scale,
            quality,
            position,
            alignment,
        } = option
        if (!position) {
            return ImageMarker.addText(
                src,
                text,
                X,
                Y,
                color,
                fontName,
                fontSize,
                scale,
                quality,
                alignment,
            )
        } else {
            return ImageMarker.addTextByPostion(
                src,
                text,
                position,
                color,
                fontName,
                fontSize,
                scale,
                quality
            )
        }
    }

    static markImage(option: ImageMarkOption) {
        const {
            src,
            markerSrc,
            X,
            Y,
            markerScale,
            scale,
            quality,
            position
        } = option

        console.log('====================================');
        console.log(option);
        console.log('====================================');

        if (!position) {
            return ImageMarker.markWithImage(
                src,
                markerSrc,
                X,
                Y,
                scale,
                markerScale,
                quality
            )
        } else {
            return ImageMarker.markWithImageByPosition(
                src,
                markerSrc,
                position,
                scale,
                markerScale,
                quality
            )
        }
    }
}

