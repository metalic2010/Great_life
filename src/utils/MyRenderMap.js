export const myRenderMap = (dataJSON, num) => {
    return dataJSON.reduce(
        (prev, el, i) => {
            const subIdx = Math.floor(i / num);
            prev[subIdx] = [...(prev[subIdx] || []), el];
            return prev;
        },
        []
    );
}
