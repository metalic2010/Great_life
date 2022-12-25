import React from 'react';
import styled from 'styled-components'

const SubstrateDiv = styled.div`
    width: 100%;
    min-height: ${props => props.min_height || "300px"};
    background: #FFFFFF;
    box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin: 20px auto
`

/**
 * @param {*} props принимает своства и методы для объекта, например: onClick
 * @returns возвращает красивую кнопку
 */
const MySubstrateDiv = (props) => {
    return (
        <SubstrateDiv {...props} />
    )
};

export default MySubstrateDiv;