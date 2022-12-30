import React from 'react';
import MySubstrateDiv from '../components/UI/Substrate/Substrate';
import GroupCatMenuBlock from '../components/contents/groupCatMenu';
import UsefullArticlesBlock from '../components/contents/usefulArticles';
import H1NameBlock from '../components/UI/headlines/H1NameBlock';

function MainPage() {
    return (
        <div>
            <MySubstrateDiv>
                <H1NameBlock>
                    Категория блюд
                </H1NameBlock>
                <GroupCatMenuBlock />
            </MySubstrateDiv>
            <UsefullArticlesBlock />
        </div>
    );
}

export default MainPage;