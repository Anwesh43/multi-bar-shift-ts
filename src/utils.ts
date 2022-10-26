const maxScale = (scale : number, i : number, n : number) : number => Math.max(0, scale - i / n)

export const divideScale = (scale : number, i : number, n : number) => Math.min(1 / n, maxScale(scale, i, n)) * n 

export const getNumArray = (n : number) : Array<number> => {
    const arr : Array<number> = []
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    return arr 
}

export const sinify = (scale : number) : number => Math.sin(scale * Math.PI)