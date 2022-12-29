import React from 'react';
import styled from 'styled-components'

const H3Name = styled.h3`
    font-style: normal;
    font-weight: 800;
    font-size: ${({ font_size }) => font_size || "18px"};
    display: flex;
    justify-content: left;
    ${({ margin }) => margin && `margin: ${ margin }`};
    height: ${({ height }) => height || "auto"};
`

function H3NameBlock({ children, ...props }) {
    return (
        <H3Name {...props} >
            {children}
        </H3Name>
    );
}

export default H3NameBlock;