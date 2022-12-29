/**
 * 
 * @param {*} txt текст который необходимо сжать
 * @param {*} count количество символов до которого необходимо сжать
 * @returns объект с подстановкой в текст разделителей
 */
export const txtShowMore = (txt, count) => {
    return [txt.split('', count).join(''), txt.split('', txt.length-count).join('')];
}
