import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const JumpButton = styled(Link)`
    text-decoration: none;
    padding: 15px 25px;
    border-radius: ${props => props.border_radius || '100px'};
    transition: all .2s;
    height: ${props => props.height || '58px'};
    font-size: ${props => props.font_size || '30px'};
    font-weight: bold;
    color: #2E1E1E;
    cursor: pointer;
    border: ${props => props.border || 'none'};
    display: flex;
    margin: ${props => props.margin || 'auto 0 0 0'};
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`

/**
 * @param {*} props принимает своства и методы для объекта, например: onClick
 * @returns возвращает красивую кнопку
 * @description font answer: например: fa fa-bars, ссылка на перечень: https://astronautweb.co/snippet/font-awesome/
 * Настройка для настройки шрифтов: https://fontawesome.ru/get-started/#:~:text=LESS%20%D0%B8%D0%BB%D0%B8%20SASS.-,%D0%A1%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%BF%D0%B0%D0%BF%D0%BA%D1%83%20font%2Dawesome%20%D0%B2%20%D0%BF%D0%B0%D0%BF%D0%BA%D1%83%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0.,%D0%BF%D1%83%D1%82%D1%8C%20%D0%BA%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B5%20%D1%81%D0%BE%20%D1%88%D1%80%D0%B8%D1%84%D1%82%D0%B0%D0%BC%D0%B8
 */
const MyJumpButton = (props) => {
    return (
        <JumpButton {...props} />
    )
};

export default MyJumpButton;