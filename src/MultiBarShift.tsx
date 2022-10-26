import React from "react";
import withContext from "./withContext";
import { useStyle  } from "./hooks";

interface MBSProps {
    n : number, 
    scale : number, 
    onClick : () => void, 
    w : number, 
    h : number 
}
const MultiBarShift : React.FC<MBSProps> = (props : MBSProps) => {
    const {parentStyle, barStyle} = useStyle(props.n, props.w, props.h, props.scale)
    return <div style = {parentStyle()}>
        {[0, 1, 2].map(i => (<div key = {`bar_${i}`} style = {barStyle(i)}></div>))}
    </div>
} 

export default withContext(MultiBarShift)