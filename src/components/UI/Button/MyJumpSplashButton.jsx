import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const JumpButton = styled(Link)`
    text-decoration: none;
    padding: 5px 15px;
    margin: 15px 0px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    font-size: ${({ font_size }) => font_size || '30px'};
    cursor: pointer;
    position: relative;
    width: ${({ width }) => width || '100%'};

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
    &:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
`

const StyleSplashButton = styled(JumpButton)`
    background-color: #2E1E1E;
    color: #fff;

    &::after {
        background-color: #2E1E1E;
    }
`

/**
 * @param {*} props принимает своства и методы для объекта, например: onClick
 * @returns возвращает красивую кнопку кнопку
 */
const MyJumpSplashButton = (props) => {
    return (
        <StyleSplashButton {...props} />
    )
};

export default MyJumpSplashButton;