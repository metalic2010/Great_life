import React from 'react';
import styled from 'styled-components'
import { handleClick } from '../../../utils/handleClick';

const ButtonCatMenuBlock = styled.div`
    cursor: pointer;
`

const ButtonCatMenu = styled.div`
    width: 130px;
    height: 130px;
    ${({ border }) => border && 'border: 1px solid #2E1E1E'};
    border-radius: 100px;
    margin: 10px;
    background-image: ${({ background }) => `url(./images/Category/${ background })` || 'none'};
    background-size: 150px;
    background-repeat: no-repeat;
    background-position: center;
`

const NameCatMenu = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 18px;
`

/**
 * @param {*} props принимает своства и методы для объекта, например: onClick
 * @returns возвращает красивую кнопку
 */
const MyButtonCatMenu = ({ children, ...props }) => {
    return (
        <ButtonCatMenuBlock onClick={() => handleClick("#")}>
            <ButtonCatMenu {...props} />
            <NameCatMenu>
                {children}
            </NameCatMenu>
        </ButtonCatMenuBlock>
    )
};

export default MyButtonCatMenu;