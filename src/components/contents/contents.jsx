import React from 'react';
import styled from 'styled-components';

const MyContents = styled.div`
    width: 100%;
`

const MyContentsWorkBlockSite = styled.div`   
    margin: 20px auto;
    width: 100vw;
    max-width: 1000px;
    display: inliner-flex;
`

function ContentBlock({ children }) {
    return (
        <MyContents>
            <MyContentsWorkBlockSite>
                {children}
            </MyContentsWorkBlockSite>
        </MyContents>
    );
}

export default ContentBlock;