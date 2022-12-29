export const myRenderMap = (dataJSON, num, count) => {
    if (count) {
        return dataJSON.reduce(
            (prev, el, i) => {
                const subIdx = Math.floor(i / num);
                prev[subIdx] = [...(prev[subIdx] || []), el];
                return prev;
            },
            []
        ).splice(0,count);
    } else {
        return dataJSON.reduce(
            (prev, el, i) => {
                const subIdx = Math.floor(i / num);
                prev[subIdx] = [...(prev[subIdx] || []), el];
                return prev;
            },
            []
        );
    }
    
}
