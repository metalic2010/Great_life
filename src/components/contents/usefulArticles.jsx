import React from 'react';
import styled from 'styled-components'
import H1NameBlock from '../UI/headlines/H1NameBlock';
import H3NameBlock from '../UI/headlines/H3NameBlock';
import dataJSON from '../../table/UsefullArticles.json';
import { myRenderMap } from '../../utils/MyRenderMap';
import { txtShowMore } from '../../utils/txtShowMore';

const MyUsefullArticles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const MyUAWorkGroupBlock = styled.div`
    display: flex;    
    margin: 0px 20px;
`

const MyUAWorkBlock = styled.div`
    min-width:  ${({ cntInRow }) => `${Math.round(100 / cntInRow)}%` || '50%'};
    max-width:  ${({ cntInRow }) => `${Math.round(100 / cntInRow)}%` || '50%'};
    ${({ border_right }) => border_right && 'border-right: 3px solid #c9c9c9'};
    margin-right: 10px;
    padding-right: 10px;
`

const MyArctificalBlock = (numRow, count) => {
    const data = myRenderMap(dataJSON, numRow, count);

    return (
        data.map((row, i) => (
            <MyUAWorkGroupBlock
                key={i}
                id={i}
            >
                {
                    row.map((item, k) => (
                        (item.Id <= count)
                            ? <MyUAWorkBlock
                                key={k}
                                id={k}
                                border_right={(k < numRow - 1 || k === 0) ? true : false}
                                cntInRow={(numRow === 1) ? count : numRow}
                            >
                                <H3NameBlock
                                    key={item.Id}
                                    height="30px"
                                >
                                    {item.Title}
                                </H3NameBlock>
                                <p>
                                    {item.ArticleText}
                                </p>
                            </MyUAWorkBlock>
                            : ""
                    ))
                }
            </MyUAWorkGroupBlock>
        ))
    );
}

function UsefullArticlesBlock() {
    return (
        <MyUsefullArticles>
            <H1NameBlock padding_top="15px">
                Полезные статьи
            </H1NameBlock>
            {MyArctificalBlock(2,2)}
        </MyUsefullArticles>
    );
}

export default UsefullArticlesBlock;