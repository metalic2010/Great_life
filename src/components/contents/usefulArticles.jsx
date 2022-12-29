import React from 'react';
import styled from 'styled-components'
import H1NameBlock from '../UI/headlines/H1NameBlock';
import H3NameBlock from '../UI/headlines/H3NameBlock';
import dataJSON from '../../Table/UsefullArticles.json';
import { myRenderMap } from '../../utils/MyRenderMap';
import { txtShowMore } from '../../utils/txtShowMore';

const MyUsefullArticles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const MyUAWorkGroupBlock = styled.div`
    margin: auto 20px;
    display: flex;
    flex-wrap: wrap;
`

const MyUAWorkBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    ${({ border_right }) => border_right && 'border-right: 3px solid #c9c9c9'};
    margin-right: 10px;
    padding-right: 10px;
`

const MyArctificalBlock = (num, count) => {
    const data = myRenderMap(dataJSON, num, count);

    return (
        <MyUAWorkGroupBlock>
            {
                data.map((row, i) => (
                    row.map((item, k) => (
                        (item.Id <= count)
                            ? <MyUAWorkBlock
                                key={i}
                                id={k}
                                border_right={(k === 0) ? true : false}
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
                ))
            }
        </MyUAWorkGroupBlock>
    );
}

function UsefullArticlesBlock() {
    return (
        <MyUsefullArticles>
            <H1NameBlock padding_top="15px">
                Полезные статьи
            </H1NameBlock>
            {MyArctificalBlock(1, 3)}
        </MyUsefullArticles>
    );
}

export default UsefullArticlesBlock;