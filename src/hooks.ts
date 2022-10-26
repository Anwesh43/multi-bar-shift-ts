import {useState, useEffect, CSSProperties} from 'react'
import { divideScale } from './utils'

const scGap : number = 0.02 
const delay : number = 20 
const sizeFactor : number = 8.9 

export const useAnimatedScale = (speed  : number = scGap, delayInMs : number = delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + speed 
                    })
                }, delayInMs) 

            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (n : number, w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / sizeFactor 
    const color : string = "indigo"
    const position = "absolute"
    const barH : number = size / 3
    const dsc : (i : number) => number = (i : number) : number => divideScale(scale, i, n)
    return {
        parentStyle() : CSSProperties {
            return {
                position, 
                left : `${w / 2}px`,
                top : `${h / 2}px`
            }
        },
        barStyle(i : number) : CSSProperties {
            return {
                position: 'absolute',
                top: `${-size + barH * i}px`,
                left: `${-size / 2 + (w / 2 - size) * dsc(i)}px`,
                background : color,
                width: `${size}px`,
                height: `${barH}px`
            }
        }
    }
}