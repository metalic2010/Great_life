import React from 'react';
import styled from 'styled-components'
import MySubstrateDiv from '../UI/Substrate/Substrate';
import GroupCatMenuBlock from '../contents/groupCatMenu'; 

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

const H1CatMenu = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    padding-top: 25px;
    display: flex;
    justify-content: center;
    font-size: 24px;
`

function ContentBlock() {
    return (
        <MyContents>
            <MyContentsWorkBlockSite>
                <MySubstrateDiv>
                    <H1CatMenu>
                        Категория блюд
                    </H1CatMenu>
                    <GroupCatMenuBlock />
                </MySubstrateDiv>
            </MyContentsWorkBlockSite>
        </MyContents>
    );
}

export default ContentBlock;