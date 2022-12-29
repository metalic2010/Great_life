import React from 'react';
import styled from 'styled-components'
import MySubstrateDiv from '../UI/Substrate/Substrate';
import GroupCatMenuBlock from './groupCatMenu'; 
import UsefullArticlesBlock from './usefulArticles';
import H1NameBlock from '../UI/headlines/H1NameBlock';

const MyContents = styled.div`
    position: absolute;
    width: 100%;
    top: 88px;
`

const MyContentsWorkBlockSite = styled.div`   
    margin: 20px auto;
    width: 100vw;
    max-width: 1000px;
    display: inliner-flex;
`

function ContentBlock() {
    return (
        <MyContents>
            <MyContentsWorkBlockSite>
                <MySubstrateDiv>
                    <H1NameBlock>
                        Категория блюд
                    </H1NameBlock>
                    <GroupCatMenuBlock />
                </MySubstrateDiv>
                <UsefullArticlesBlock />
            </MyContentsWorkBlockSite>
        </MyContents>
    );
}

export default ContentBlock;