/**
 * @param {*} dataJSON информация которую необходимо отобразить
 * @param {*} numRow количество информации в 1 строку
 * @param {*} count сколько всего нужно достать информации
 * @returns возвращает массив
 */
export const myRenderMap = (dataJSON, numRow, count) => {
    if (count) {
        return dataJSON.reduce(
            (prev, el, i) => {
                const subIdx = Math.floor(i / numRow);
                prev[subIdx] = [...(prev[subIdx] || []), el];
                return prev;
            },
            []
        ).splice(0,count);
    } else {
        return dataJSON.reduce(
            (prev, el, i) => {
                const subIdx = Math.floor(i / numRow);
                prev[subIdx] = [...(prev[subIdx] || []), el];
                return prev;
            },
            []
        );
    }
    
}
