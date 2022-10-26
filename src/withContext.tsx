import React from "react";
import {useStyle, useDimension, useAnimatedScale} from './hooks'

const withContext = (MainC : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick} = useAnimatedScale(0.02 / props.n, 20)
        const mainProps = {
            onClick, 
            w, 
            h, 
            scale
        }
        const newProps = {...props, ...mainProps}
        return (<MainC {...newProps}></MainC>)
    }
}

export default withContext 