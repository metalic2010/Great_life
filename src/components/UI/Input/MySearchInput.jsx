import React from 'react';
import styled from 'styled-components'

const SearchInput = styled.input`
    text-decoration: none;
    padding: 15px 25px;
    width: 50%;
    height: ${props => props.height || '20px'};
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    font-size: ${props => props.font_size || '30px'};
    font-weight: bold;
    color: #2E1E1E;
    cursor: pointer;
    border: ${props => props.border || 'none'};
    display: flex;
    margin: auto 5px 0 0;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`

/**
 * @param {*} props принимает своства и методы для объекта, например: onClick
 * @returns возвращает красивую кнопку
 */
const MySearchInput = (props) => {
    return (
        <SearchInput {...props} />
    )
};

export default MySearchInput;