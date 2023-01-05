import React from 'react';
import styled from 'styled-components';
import Substrate from '../components/UI/Substrate/Substrate';
import H1NameBlock from '../components/UI/headlines/H1NameBlock';
import DataJSONUFA from '../table/UsefullArticles.json';
import { txtShowMore } from '../utils/txtShowMore';
import MyJumpSplashButton from '../components/UI/Button/MyJumpSplashButton';

const MyWorkBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto 50px;
`

const MyWorkPostBlock = styled.div`
    margin: auto 50px;
    display: flex;
`

const MyWorkPostTextBlock = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const StyleSubstrate = styled(Substrate)`
    min-height: 100%;
    padding-top: 0px;
`

const StyleH1NameBlock = styled(H1NameBlock)`
    padding-top: 0px;
    justify-content: flex-start;
`

const IconDiv = styled.div`
    margin: 5px;
    width: 58px;
    height: 58px;
    background: url(/images/UsefullArticles/icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100px;
`

const Myimg = styled.img`
    height: 260px;
    min-width: 30%;
    max-width: 30%;
    border-radius: 8px;
    object-fit: fill;
    object-position: center;
    margin: 15px;
`

const maxLnText = 600;
const countListOnPage = 10

const GetPostList = (items) => {
    return (
        items.map(item =>
            <Substrate key={item.Id}>
                <MyWorkPostBlock>
                    <MyWorkPostTextBlock key={(item.Id + 1) * 2}>
                        <StyleH1NameBlock key={(item.Id + 1) * 3}>
                            {item.Title}
                        </StyleH1NameBlock>
                        <div>
                            {
                                (item.ArticleText.length > maxLnText)
                                    ? `${txtShowMore(item.ArticleText, maxLnText)[0]}...`
                                    : item.ArticleText
                            }
                            <br />
                            <MyJumpSplashButton
                                font_size="14px"
                                width="100px"
                            >
                                Подробнее...
                            </MyJumpSplashButton>
                        </div>
                    </MyWorkPostTextBlock>
                    <Myimg src={`images/UsefullArticles/${item.img}`} alt="" />
                </MyWorkPostBlock>
            </Substrate>
        )
    )
}

const getPagePost = (currentPage) => {
    const prevPage = (currentPage === 1) ? 0 : (currentPage-1) * countListOnPage;
    const countList = currentPage * countListOnPage;
    const currentPageList = DataJSONUFA.slice(prevPage, countList);

    return (GetPostList(currentPageList))
}

const clickPage = (num) => {
    return(getPagePost(num))
}

const getPagination = () => {
    const contPage = Math.ceil(DataJSONUFA.length / countListOnPage)

    const pageNumbers = [...Array(contPage + 1).keys()].slice(1)

    return(
        pageNumbers.map((pageNum, i) => <button key={i} onClick={clickPage(i)}>{pageNum}</button>)
    )
}

const MyBlockUsefullArtifical = () => {
    return (
        <>
            <StyleSubstrate>
                <MyWorkBlock>
                    <IconDiv />
                    <StyleH1NameBlock>
                        Полезные статьи
                    </StyleH1NameBlock>
                </MyWorkBlock>
            </StyleSubstrate>
            {getPagePost(1)}
            {getPagination()}
        </>
    )
}

export default MyBlockUsefullArtifical;