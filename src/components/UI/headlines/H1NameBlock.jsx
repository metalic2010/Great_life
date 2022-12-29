import React from 'react';
import styled from 'styled-components'

const H1Name = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size:  ${({ font_size }) => font_size || "24px"};
    padding-top: ${({ padding_top }) => padding_top || "25px"};
    display: flex;
    justify-content: center;
`

function H1NameBlock({ children, ...props }) {
    return (
        <H1Name {...props} >
            {children}
        </H1Name>
    );
}

export default H1NameBlock;