import React from 'react';
import styled from 'styled-components';

const MyModalBlock = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: ${({ active }) => active};
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.5);
`

const MyModalContent = styled.div`
    padding: 25px;
    background: white;
    border-radius: 16px;
`

const MyModal = ({ children, visible, setVisible }) => {
    return (
        <MyModalBlock
            active={(visible) ? 'flex' : 'none'}
            onClick={() => setVisible().payload}
        >
            <MyModalContent onClick={(e) => e.stopPropagation()}>
                {children}
            </MyModalContent>
        </MyModalBlock>
    );
};

export default MyModal;