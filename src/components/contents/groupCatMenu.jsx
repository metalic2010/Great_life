import React from 'react';
import styled from 'styled-components'
import MyButtonCatMenu from '../UI/Button/MyButtonCatMenu';
import dataJSON from '../../table/NameCategory.json';
import { myRenderMap } from '../../utils/MyRenderMap';

const MyGroupCategoryMenu = styled.div`
    margin: auto 100px;
    display: flex;
    justify-content: center;
    padding-bottom: ${({ padding_bottom }) => padding_bottom || '10px'};
`

const MyRenderCategoryMenu = (num) => {
    const data = myRenderMap(dataJSON, num);

    return (
        <div>
            {
                data.map((row, i) => (
                    <MyGroupCategoryMenu key={i}>
                        {
                            row.map((item, k) => (
                                <MyButtonCatMenu
                                    key={item.Id}
                                    background={item.img}
                                    children={item.NameCategory}
                                />
                            ))
                        }
                    </MyGroupCategoryMenu>
                ))
            }
        </div>
    )
}

function GroupCatMenuBlock() {
    return (
        <div>
            {MyRenderCategoryMenu(4)}
        </div>
    );
}

export default GroupCatMenuBlock;