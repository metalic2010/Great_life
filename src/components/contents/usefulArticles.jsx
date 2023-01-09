import React from 'react';
import styled from 'styled-components'
import H1NameBlock from '../UI/headlines/H1NameBlock';
import H3NameBlock from '../UI/headlines/H3NameBlock';
import dataJSON from '../../table/UsefullArticles.json';
import { myRenderMap } from '../../utils/MyRenderMap';
import { txtShowMore } from '../../utils/txtShowMore';
import MyJumpButton from '../UI/Button/MyJumpButton';
import MyJumpSplashButton from '../UI/Button/MyJumpSplashButton';
import { useDispatch, useSelector } from 'react-redux';
import { setStateMenu } from '../../store/menuSlice';

const MyUsefullArticles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const MyUAWorkGroupBlock = styled.div`
    display: flex;    
    margin: 0px 20px 5px 20px;
    width: 90%;
`

const MyUAWorkBlock = styled.div`
    min-width:  ${({ cntInRow }) => `${Math.round(100 / cntInRow)}%` || '50%'};
    max-width:  ${({ cntInRow }) => `${Math.round(100 / cntInRow)}%` || '50%'};
    ${({ border_right }) => border_right && 'border-right: 3px solid #c9c9c9'};
    margin-right: 10px;
    padding-right: 10px;
`

const StyleJumpButton = styled(MyJumpButton)`
    border-bottom: 1px solid #b1a2a2;
    width: calc(100% / 2);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
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
                                <div>
                                    {`${txtShowMore(item.ArticleText, 200)[0]}...`}
                                    <MyJumpSplashButton
                                        font_size="14px"
                                        width="100px"
                                    >
                                        Подробнее...
                                    </MyJumpSplashButton>
                                </div>
                            </MyUAWorkBlock>
                            : ""
                    ))
                }
            </MyUAWorkGroupBlock>
        ))
    );
}

function UsefullArticlesBlock() {
    const dispatch = useDispatch();
  
    const menuActive = useSelector(state => state.menu);
    const setMenuActive = (visible) => dispatch(setStateMenu(visible));

    return (
        <MyUsefullArticles>
            <H1NameBlock padding_top="15px">
                Полезные статьи
            </H1NameBlock>
            {MyArctificalBlock(2, 2)}
            <StyleJumpButton
                font_size="15px"
                height="15px"
                margin="5px 0 0 0"
                onClick={() => menuActive && setMenuActive()}
                to={"/UsefullArtifical"}
            >
                Больше полезных статей...
            </StyleJumpButton>
        </MyUsefullArticles>
    );
}

export default UsefullArticlesBlock;