import React from "react";
import withContext from "./withContext";
import { useStyle  } from "./hooks";
import { getNumArray } from "./utils";

interface MBSProps {
    n : number, 
    scale : number, 
    onClick : () => void, 
    w : number, 
    h : number 
}
const MultiBarShift : React.FC<MBSProps> = (props : MBSProps) => {
    const {parentStyle, barStyle} = useStyle(props.n, props.w, props.h, props.scale)
    return <div style = {parentStyle()} onClick = {() => {
        props.onClick()
    }}>
        {getNumArray(props.n).map(i => (<div key = {`bar_${i}`} style = {barStyle(i)}></div>))}
    </div>
} 

export default withContext(MultiBarShift)